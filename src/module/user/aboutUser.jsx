import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./aboutUser.css";

const AboutUser = ({ user }) => {
  return (
    <div className="about-user-card">
      <div className="bio-section">
        <h5 className="section-title">User Bio</h5>
        <p className="bio-text">{user?.bio || "React"}</p>
      </div>

      <hr className="divider" />

      <div className="contact-section">
        <h5 className="section-title uppercase">Contact Info</h5>
        <ul className="contact-list">
          <li>
            <i className="bi bi-envelope"></i>
            <span>{user?.email || "manoj@mail.com"}</span>
          </li>
          <li>
            <i className="bi bi-telephone"></i>
            <span>{user?.phone || "9876543210"}</span>
          </li>
          <li>
            <i className="bi bi-globe"></i>
            <span>{user?.website || "www.example.com"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUser;