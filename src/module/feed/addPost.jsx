import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/action/postAction";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./addPost.css";

const AddPost = ({ userAvatar = "assest/avatar/photo-men.jpg" }) => {
  const dispatch = useDispatch();
  const [postText, setPostText] = useState("");

  const handlePost = () => {
    if (postText.trim()) {
      const newPost = {
        post: postText,
        userId: 1,
        img: "assest/banner/images3.jpg",
        imgName: "New Post Image",
      };
      dispatch(addPost(newPost));
      setPostText("");
    }
  };

  return (
    <div className="add-post-card">
      <div className="post-header">
        <h5 className="post-title">Post Something</h5>
      </div>

      <hr className="post-divider" />

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

      <div className="post-footer">
        <button className="btn-media">
          <i className="bi bi-image"></i>
          Photo/Video
        </button>
        <button className="btn-post-submit" onClick={handlePost}>
          Post
        </button>
      </div>
    </div>
  );
};

export default AddPost;