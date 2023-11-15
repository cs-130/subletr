import React from 'react';
import './App.css';
import Header from './components/header1';
import HeaderNoSearch from './components/headerNoSearch'; // Import the new header component
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CreateListing from './pages/CreateListing/CreateListing';
import DetailedListing from './pages/DetailedListing/detailed-listing';

function App() {
  // Function to determine which header to use
  const CurrentHeader = () => {
    const location = useLocation();
    if (location.pathname === '/testing') {
      return <HeaderNoSearch />;
    }
    return <Header />;
  };

  return (
    <div className="container">
      <Router>
        <CurrentHeader /> {/* Use the CurrentHeader function */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<HomePage />} />
          <Route path="/listings/create" element={<CreateListing />} />
          <Route path="/testing" element={<DetailedListing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
