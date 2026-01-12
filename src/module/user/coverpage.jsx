import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./coverpage.css";

const CoverPage = () => {
  return (
    <div className="banner-container">
      <img 
        src="assest/banner/images4.jpg" 
        alt="Cover Banner" 
        className="curved-banner-img" 
      />
      
      <button className="overlay-upload-btn" type="button">
        <i className="bi bi-camera me-2"></i>
        Change Cover
      </button>
    </div>
  );
};

export default CoverPage;