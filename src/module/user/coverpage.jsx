import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/action/userAction";
import "./coverpage.css";

const CoverPage = () => {
  const [coverImage, setCoverImage] = React.useState("assest/banner/images4.jpg");
  const fileInputRef = React.useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setCoverImage(result);
        dispatch(updateUser(1, { coverImg: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="banner-container">
      <img
        src={coverImage}
        alt="Cover Banner"
        className="curved-banner-img"
      />

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />

      <button className="overlay-upload-btn" type="button" onClick={handleButtonClick}>
        <i className="bi bi-camera me-2"></i>
        Change Cover
      </button>
    </div>
  );
};

export default CoverPage;