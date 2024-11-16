import React from 'react';
import './css/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleShopclick = () => {
    navigate('/product');
  };

  return (
    <div className="home-container">
      <div className="background-overlay"></div>
      <div className="content">
        <div className="text-section">
          <h1>SUMMER COLLECTION</h1>
          <h2>Fall-Winter <br /> Collections 2024</h2>
          <p>
            A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.
          </p>
          <button className="show-now-button" onClick={handleShopclick}>
            SHOW NOW <span className="arrow">&rarr;</span>
          </button><br /><br />
          <div className="additional-image">
            <img src="press-button.png" alt="Additional Collection" />
          </div>
        </div>
        <div className="image-section">
          <img src="dress1.png" alt="Collection" />
        </div>
      </div>
    </div>
  );
};

export default Home;
