import React from 'react';
import './App.css';
import Header from './components/header1';
import HeaderNoSearch from './components/headerNoSearch'; // Import the new header component
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CreateListing from './pages/CreateListing/CreateListing';
import CreateListing2 from './pages/CreateListing/CreateListing2';
import DetailedListing from './pages/DetailedListing/detailed-listing';
import { ProgressProvider } from './pages/CreateListing/context'

function App() {
  // Function to determine which header to use
  const CurrentHeader = () => {
    const location = useLocation();
    const path = location.pathname;
    if (path.startsWith('/listings/create/') || path === '/testing') {
      return <HeaderNoSearch />;
    }
    return <Header />;
  };

  return (
    <ProgressProvider>
    <div className="container">
      <Router>
        <CurrentHeader /> {/* Use the CurrentHeader function */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<HomePage />} />
          <Route path="/listings/create/1" element={<CreateListing />} />
          <Route path="/listings/create/2" element={<CreateListing2 />} />
          <Route path="/testing" element={<DetailedListing />} />
        </Routes>
      </Router>
    </div>
    </ProgressProvider>
  );
}

export default App;
