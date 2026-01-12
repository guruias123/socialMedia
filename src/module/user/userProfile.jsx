import React, { useEffect, useState, useCallback } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./userProfile.css";

const API_BASE =
  (typeof import.meta !== "undefined" &&
    import.meta.env &&
    import.meta.env.VITE_API_BASE) ||
  process.env.REACT_APP_API_BASE ||
  "http://localhost:3001";

const UserProfile = ({ userId = 1 }) => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const toPublicPath = (p) => {
    if (!p) return "";
    return p.startsWith("/") ? p : `/${p}`;
  };

  const fetchUser = useCallback(async (signal) => {
    try {
      setError("");
      const res = await fetch(`${API_BASE}/users/${userId}`, { signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setUser(data);
    } catch (e) {
      if (e.name !== "AbortError") {
        setError(e.message || "Failed to load profile");
      }
    }
  }, [userId]);

  useEffect(() => {
    const controller = new AbortController();
    fetchUser(controller.signal);
    return () => controller.abort();
  }, [fetchUser]);

  const handleToggleFollow = useCallback(async () => {
    if (!user || pending) return;
    try {
      setPending(true);
      const nextStatus = !user.following;
      const res = await fetch(`${API_BASE}/users/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ following: nextStatus }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const updated = await res.json();
      setUser(updated);
    } catch (e) {
      setError("Update failed");
    } finally {
      setPending(false);
    }
  }, [user, pending]);

  if (!user && !error) return <div className="text-center p-5">Loading...</div>;

  return (
    <div className="profile-card-wrapper">
      <div className="avatar-container">
        <div>
          {user?.logo ? (
            <img 
              src={toPublicPath(user.logo)} 
              alt="User avatar" 
              className="avatar-img" 
            />
          ) : (
            <div className="avatar-placeholder" />
          )}
        </div>
      </div>

      <div className="user-info">
        <h2 className="user-name-text">{user?.name || "Loading..."}</h2>
        <p className="user-role-text text-capitalize">{user?.role || "Developer"}</p>
      </div>

      <div className="action-button-row">
        <button 
          className="custom-btn" 
          onClick={() => user?.email && (window.location.href = `mailto:${user.email}`)}
        >
          <i className="bi bi-envelope"></i>
          <span>Message</span>
        </button>
        <button 
          className="custom-btn" 
          onClick={handleToggleFollow} 
          disabled={pending}
        >
          <i className={user?.following ? "bi bi-person-check" : "bi bi-person-plus"}></i>
          <span>{user?.following ? "Following" : "Follow"}</span>
        </button>
      </div>

      <div className="bottom-divider-line"></div>
      
      {error && <div className="text-danger small pb-3">{error}</div>}
    </div>
  );
};

export default UserProfile;