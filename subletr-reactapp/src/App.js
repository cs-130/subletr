import React, { useEffect, useContext } from "react";
import "./App.css";
import Header from "./components/header1";
import HeaderNoSearch from "./components/headerNoSearch"; // Import the new header component
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CreateListing from "./pages/CreateListing/CreateListing";
import Profile from "./pages/Profile/profile";
import { UserContext } from "./context/UserContext";
import { ProgressProvider } from "./pages/CreateListing/context";
import Messages from "./pages/Messages/Messages";
import DetailedListing from "./pages/DetailedListing/detailed-listing";
import "./themes/default/main.scss";
import ManageListing from "./pages/Profile/ManageListing";

/**
 * @function
 * @name App
 * @description The root component of the application, responsible for rendering different routes and managing user context.
 * @returns {JSX.element} The JSX to be rendered.
 */
function App() {
  const { isUserLoggedIn } = useContext(UserContext);

  /**
   * Component that renders the appropriate header based on the current URL path.
   * If the path starts with "/listings/create/", or matches "/testing" or "/profile",
   * it renders the HeaderNoSearch component. Otherwise, it renders the Header component.
   */
  const CurrentHeader = () => {
    const location = useLocation();
    const path = location.pathname;

    if (
      path.startsWith("/listings/create/") ||
      path === "/testing" ||
      path === "/profile"
    ) {
      return <HeaderNoSearch />;
    }
    return <Header />;
  };

  useEffect(() => {
    isUserLoggedIn();
  }, [isUserLoggedIn]);

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
