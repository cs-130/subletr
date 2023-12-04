import React, {useContext, useState} from 'react';
import './profile.css'
import { TextField, Button, Box, Avatar } from '@mui/material';
import Listing from '../../components/listing';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom'


const ViewedListings = () => {
    const {
        viewedListings,
    } = useContext(UserContext)
    const navigate = useNavigate()

    const handleListingClick = (listingId) => {
        navigate(`/${listingId}`)
    }

    return (
        <>
            <header className='header1'>Favorited Listings</header>
            <div className='top-div'>
            <div className="listings-grid">
                {viewedListings.length ? viewedListings.map((listing, index) => (
                <Listing
                    key={index}
                    data={listing}
                    onClick={() => handleListingClick(listing._id)}
                    favoriteMode={2}
                />
                    ))
                :
                <div style={{marginTop: "10vh"}}>
                    Looks like you have not viewed any listings yet!
                </div>
                }
            </div>
            </div>
        </>
    )

}

export default ViewedListings