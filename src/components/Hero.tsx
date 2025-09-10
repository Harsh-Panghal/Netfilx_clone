import React from 'react';

const Hero = () => {
  return (
    <header className="banner">
      <div className="banner_contents">
        <h1 className="banner_title">
          Professional Portfolio
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <div className="banner_description">
          Discover exceptional content and innovative solutions designed for 
          professionals. Experience the future of digital entertainment with our 
          curated selection of premium offerings that elevate your standards.
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Hero;