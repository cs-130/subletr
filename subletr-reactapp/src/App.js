import React, { useState, useEffect } from 'react';
import './App.css';
import Listing from './components/listing.js';
import { Pagination } from '@mui/material';



function App() {
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 10; 

  useEffect(() => {
    generateRandomListings();
  }, []);

  const generateRandomListings = () => {
    const sampleDescriptions = [
      'Spacious Apartment in Downtown',
      'Cozy Studio with Park View',
      '2BR Home Near the Beach',
      'Modern Loft with City Skyline',
      'Country House with Big Garden',
      'Urban Oasis Studio with City View',
      'Romantic Beachside Bungalow',
      'Stylish Downtown Loft Near Eateries',
      'Chic Countryside Cottage with Views',
      'Elegant Penthouse with Rooftop Pool',
      'Historical Home in Old Town',
      'Sleek Minimalist Apartment Downtown',
      'Vintage Bed and Breakfast with Charm',
      'Garden View Suite with Private Balcony',
      'Artistic Retreat Near Galleries',
      'Sunny Seaside Condo with Pool Access',
      'Retro Caravan in Hipster District',
      'Luxe Villa with Infinity Pool',
      'Family-Friendly Home with Play Area',
      'Countryside Chalet Near Hiking Trails',
      'Designer Condo with Modern Amenities',
      'Tranquil Getaway with Zen Garden',
      'Bright Top Floor Flat with Terrace',
      'Nautical-Themed Boat House',
      'Treehouse with Panoramic Forest Views',
      'Contemporary Studio in Art District',
      'Farmhouse Retreat with Animal Tours',
      'Lakeside Lodge with Boat Rentals',
      'Historical Manor with Secret Garden',
      'Downtown Duplex Steps from Nightlife',
      'Serene Sanctuary with Meditation Room',
      'Rustic Ranch with Horseback Riding',
      'Majestic Castle Overlooking the Vale',
      ];    
        
      const randomListings = Array.from({ length: 30 }).map(() => {
      const randomDescription = sampleDescriptions[Math.floor(Math.random() * sampleDescriptions.length)];
      const randomPrice = Math.floor(Math.random() * (200 - 50 + 1) + 50);
      return {
        description: randomDescription,
        price: randomPrice
      };
    });

    setListings(randomListings);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const currentListings = listings.slice(
    (currentPage - 1) * listingsPerPage,
    currentPage * listingsPerPage
  );


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

      <div className="listings-grid">
        {currentListings.map((listing, index) => (
          <Listing
            key={index}
            title={listing.description}
            description="2 guests · 1 bedroom · 1 bed · 1 bath"
            price={`$${listing.price}/night`}
          />
        ))}
      </div>

      <div className="pagination">
        <Pagination
          count={Math.ceil(listings.length / listingsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
        />
      </div>
    </div>
  );
}

export default App;

