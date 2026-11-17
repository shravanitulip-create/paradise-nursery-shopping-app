
import React from 'react';
import './App.css';

function App() {
  const handleGetStarted = () => {
    window.location.href = '/plants';
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery!
          Discover a beautiful collection of indoor plants
          and bring nature into your home.
          Explore our plants and find the perfect green
          companion for your space.
        </p>

        <button
          className="get-started-btn"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
