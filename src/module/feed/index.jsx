import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./feeds.css";

const Feeds = () => {
  return (
    <div className="feed-card">
      {/* 1. Header: User Info */}
      <div className="feed-header">
        <div className="user-info">
          <div className="avatar-circle-small">
            <img src="/assets/manoj.png" alt="Manoj" />
          </div>
          <div className="user-details">
            <h6 className="user-name">Manoj Kumar M</h6>
            <span className="user-role">Developer</span>
          </div>
        </div>
        <i className="bi bi-three-dots"></i>
      </div>

      {/* 2. Post Content: Image & Text */}
      <div className="feed-content">
        <div className="post-image-container">
          <img src="/assets/post-sample.jpg" alt="Post" className="post-img" />
        </div>
        <p className="post-text">
          Nam males dolor tellus pertium amet was headrerit facilties id vitae enim sad omare there suspendisse sed
        </p>
      </div>

      <hr className="feed-divider" />

      {/* 3. Engagement Metrics */}
      <div className="feed-actions">
        <span><i className="bi bi-hand-thumbs-up"></i> 4</span>
        <span><i className="bi bi-chat-left-text"></i> 2</span>
        <span><i className="bi bi-share"></i> Share</span>
      </div>

      <hr className="feed-divider" />

      {/* 4. Add Comment Section */}
      <div className="add-comment">
        <div className="avatar-circle-vsmall">
          <img src="/assets/manoj.png" alt="User" />
        </div>
        <div className="comment-input-wrapper">
          <input type="text" placeholder="Write something..." />
          <button className="send-btn"><i className="bi bi-send-fill"></i></button>
        </div>
      </div>

      {/* 5. Existing Comments */}
      <div className="comments-list">
        <div className="comment-item">
          <div className="avatar-circle-vsmall">
            <img src="/assets/meyri.png" alt="Meyri" />
          </div>
          <div className="comment-content">
            <h6 className="comment-user">Meyri Carles</h6>
            <p className="comment-text">If the dolor tellus pertium amet was headrerit facilties id vitae enim sad omare there suspendisse</p>
            <div className="comment-footer">
              <span>Like</span> | <span>Reply</span> | <span className="timestamp">2 years ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;