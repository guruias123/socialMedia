import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./addPost.css";

const AddPost = ({ userAvatar = "/assets/manoj.png" }) => {
  const [postText, setPostText] = useState("");

  return (
    <div className="add-post-card">
      {/* Header */}
      <div className="post-header">
        <h5 className="post-title">Post Something</h5>
      </div>
      
      <hr className="post-divider" />

      {/* Input Section */}
      <div className="post-body">
        <div className="post-user-avatar">
          <img src={userAvatar} alt="User" />
        </div>
        <textarea
          className="post-input"
          placeholder="Write something..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
      </div>

      <hr className="post-divider" />

      {/* Footer Actions */}
      <div className="post-footer">
        <button className="btn-media">
          <i className="bi bi-image"></i>
          Photo/Video
        </button>
        <button className="btn-post-submit">
          Post
        </button>
      </div>
    </div>
  );
};

export default AddPost;