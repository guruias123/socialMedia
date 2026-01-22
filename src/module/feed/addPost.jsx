import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/action/postAction";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./addPost.css";

const AddPost = ({ userAvatar = "assest/avatar/photo-men.jpg" }) => {
  const dispatch = useDispatch();
  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = React.useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    if (postText.trim() || selectedImage) {
      const newPost = {
        post: postText,
        userId: 1,
        img: selectedImage || null,
        imgName: selectedImage ? "Uploaded Image" : null,
      };
      dispatch(addPost(newPost));
      setPostText("");
      setSelectedImage(null);
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
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleFileChange}
        />
        <button className="btn-media" onClick={() => fileInputRef.current.click()}>
          <i className="bi bi-image"></i>
          {selectedImage ? "Image Selected" : "Photo/Video"}
        </button>
        <button className="btn-post-submit" onClick={handlePost}>
          Post
        </button>
      </div>
    </div>
  );
};

export default AddPost;