import React from 'react';
import './../assets/styles/AppDownload.css';


const AppDownload = () => {
  return (
    <div className="app-download-container my-3 px-4">
      <div className="logo">
        MEDMIND<sup>®</sup>
      </div>

      <div className="store-buttons">
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;

