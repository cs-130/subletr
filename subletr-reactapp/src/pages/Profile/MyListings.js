import React, { useContext } from 'react';
import './profile.css'
import Listing from '../../components/listing';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from "react-router-dom";

/**
 * @function
 * @name MyListings
 * @description The component that displays the user's listings.
 * @returns {JSX.Element} The JSX element representing the MyListings component.
 */
const MyListings = () => {
  const { userListings, deleteListing } = useContext(UserContext);

  const Navigate = useNavigate();

  /**
   * Handles the click event when a listing is clicked.
   * Navigates to the detailed view of the clicked listing.
   * @param {string} listingId - The ID of the clicked listing.
   */
  const handleListingClick = (listingId) => {
    Navigate(`/${listingId}`);
  };

  /**
   * Handles the delete event when a listing is deleted.
   * Calls the deleteListing function to delete the listing.
   * @param {string} listingId - The ID of the listing to delete.
   */
  const handleDelete = (listingId) => {
    deleteListing(listingId);
  };

  return (
    <>
      <header className="header1">My Listings</header>
      <div className="top-div">
        <div className="listings-grid" style={{ position: "relative" }}>
          {userListings.length ? (
            userListings.map((listing, index) => (
              <Listing
                key={index}
                data={listing}
                onClick={() => handleListingClick(listing._id)}
                favoriteMode={1}
                handleDelete={() => handleDelete(listing._id)}
              />
            ))
          ) : (
            <div style={{ marginTop: "10vh" }}>
              Looks like you have not created any listings yet!
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyListings