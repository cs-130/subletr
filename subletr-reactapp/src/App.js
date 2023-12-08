import React, { useEffect, useContext } from 'react';
import './App.css';
import Header from './components/header1';
import HeaderNoSearch from './components/headerNoSearch'; // Import the new header component
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CreateListing from './pages/CreateListing/CreateListing';
import CreateListing2 from './pages/CreateListing/CreateListing2';
import CreateListing3 from './pages/CreateListing/CreateListing3';
import CreateListing4 from './pages/CreateListing/CreateListing4';
import CreateListing5 from './pages/CreateListing/CreateListing5';
import Profile from './pages/Profile/profile';
import { UserContext } from './context/UserContext';
import { ProgressProvider } from './pages/CreateListing/context';
import Messages from './pages/Messages/Messages';
import DetailedListing from './pages/DetailedListing/detailed-listing';
import './themes/default/main.scss';
import ManageListing from './pages/Profile/ManageListing';

function App() {
  const {
    isUserLoggedIn
  } = useContext(UserContext)
  const CurrentHeader = () => {
    const location = useLocation();
    const path = location.pathname;
    if (path.startsWith('/listings/create/') || path === '/testing' || path === '/profile') {
      return <HeaderNoSearch />;
    }
    return <Header />;
  };

  console.log(process.env.NODE_ENV)


  useEffect(() => {
    isUserLoggedIn()
  }, [])

  return (
    <ProgressProvider>
    <div className="container">
      <Router>
        <HeaderNoSearch /> {/* Use the CurrentHeader function */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/manage" element={<Profile />} />
          <Route path="/manage/:listing_id" element={<ManageListing />} />
          <Route path="/listings/create/1" element={<CreateListing />} />
          <Route path="/listings/create/2" element={<CreateListing2 />} />
          <Route path="/listings/create/3" element={<CreateListing3 />} />
          <Route path="/listings/create/4" element={<CreateListing4 />} />
          <Route path="/listings/create/5" element={<CreateListing5 />} />
          {/* <Route path="/profile/" element={<Profile />} /> */}
          <Route path="/messages/" element={<Messages />} />
          <Route path="/:listing_id" element={<DetailedListing />} />
        </Routes>
      </Router>
    </div>
    </ProgressProvider>
  );
}

export default App;
