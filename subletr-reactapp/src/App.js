import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    generateRandomListings();
  }, []);

  const generateRandomListings = () => {
    const sampleDescriptions = [
      'Spacious Apartment in Downtown',
      'Cozy Studio with Park View',
      '2BR Home Near the Beach',
      'Modern Loft with City Skyline',
      'Country House with Big Garden'
    ];

    const randomListings = Array.from({ length: 5 }).map(() => {
      const randomDescription = sampleDescriptions[Math.floor(Math.random() * sampleDescriptions.length)];
      const randomPrice = Math.floor(Math.random() * (200 - 50 + 1) + 50);
      return {
        description: randomDescription,
        price: randomPrice
      };
    });

    setListings(randomListings);
  };

  return (
    <div className="container">
      <div className="header">
        Subletr
        <button className="profile-btn">Profile</button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search sublets..." />
        <button>Search</button>
      </div>

      {listings.map((listing, index) => (
        <div className="listing" key={index}>
          <h3>{listing.description}</h3>
          <p>2 guests · 1 bedroom · 1 bed · 1 bath</p>
          <p>${listing.price}/night</p>
        </div>
      ))}
    </div>

  );
}

export default App;
