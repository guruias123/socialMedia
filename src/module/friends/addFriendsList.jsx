import React from "react";
import "./addFriendsList.css";

const AddFriendsList = () => {
  // Mock data to match the screenshot
  const friends = [
    { id: 1, name: "Manoj Kumar M", role: "Developer", img: "/assets/manoj.png", isSpecial: true },
    { id: 2, name: "Sundar Saar", role: "Tester", img: "/assets/sundar.png", isSpecial: false },
    { id: 3, name: "naveen", role: "developer", img: "/assets/naveen.png", isSpecial: false },
  ];

  return (
    <div className="friends-list-card">
      <div className="friends-header">
        <h5 className="friends-title">Friends</h5>
      </div>
      
      <hr className="friends-divider" />

      <div className="friends-body">
        {friends.map((friend) => (
          <div className="friend-item" key={friend.id}>
            <div className={`friend-avatar ${friend.isSpecial ? 'bg-red' : ''}`}>
              <img src={friend.img} alt={friend.name} />
            </div>
            <div className="friend-info">
              <h6 className="friend-name">{friend.name}</h6>
              <p className="friend-role">{friend.role}</p>
            </div>
            <button className="btn-follow">Follow</button>
          </div>
        ))}
      </div>

      <div className="friends-footer">
        <button className="btn-add-users">
          <span className="plus-icon">+</span> Add Users
        </button>
      </div>
    </div>
  );
};

export default AddFriendsList;