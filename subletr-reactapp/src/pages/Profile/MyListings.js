import React, {useContext, useState} from 'react';
import './profile.css'
import { TextField, Button, Box, Avatar } from '@mui/material';
import Listing from '../../components/listing';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const MyListings = () => {
    const {
        userListings,
        deleteListing,
    } = useContext(UserContext)

    const Navigate = useNavigate()


    const handleListingClick = (listingId) => {
        Navigate(`/manage/${listingId}`)
    }

    const handleDelete = (listingId) => {
        deleteListing(listingId)
    }

    return (
        <>
            <header className='header1'>My Listings</header>
            <div className='top-div'>
            <div className="listings-grid" style={{position: 'relative'}}>
                    {userListings.length ? userListings.map((listing, index) => (
                    <Listing
                        key={index}
                        data={listing}
                        onClick={() => handleListingClick(listing._id)}
                        favoriteMode={1}
                        handleDelete={() => handleDelete(listing._id)}
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