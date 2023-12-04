import React, { useContext } from 'react';
import './profile.css'
import Listing from '../../components/listing';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from "react-router-dom";


const MyListings = () => {
    const {
        userListings,
    } = useContext(UserContext)

    const navigate = useNavigate();

    const handleListingClick = (listing_id) => {
      navigate(`/${listing_id}`);
    };

    return (
        <>
            <header className='header1'>My Listings</header>
            <div className='top-div'>
            <div className="listings-grid">
                {userListings.length ? userListings.map((listing, index) => (
                <Listing
                    key={index}
                    data={listing}
                    onClick={() => handleListingClick(listing._id)}
                    favoriteMode={1}
                />
                    ))
                :
                <div style={{marginTop: "10vh"}}>
                    Looks like you have not created any listings yet!
                </div>
                }
            </div>
            </div>
        </>
    )

}

export default MyListings