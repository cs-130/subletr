import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header1'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CreateListing from './pages/CreateListing/CreateListing';
import DetailedListing from './pages/DetailedListing/detailed-listing';




function App() {



  return (
    <div className="container">
      {/* <Switch> */}
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<HomePage />} />
          <Route path="/listings/create" element={<CreateListing />} />
          <Route path="/testing" element={<DetailedListing />} />
        </Routes>
      </Router>

      
    {/* </Switch>    */}
    </div>
  );
}

export default App;

