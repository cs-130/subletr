import React, {useContext, useState} from 'react';
import './profile.css'
import { TextField, Button, Box, Avatar } from '@mui/material';
import Listing from '../../components/listing';
import { UserContext } from '../../context/UserContext';


const ViewedListings = () => {
    const {
        viewedListings,
    } = useContext(UserContext)


    const handleListingClick = () => {
        console.log('click')
    }

    return (
        <>
            <header className='header1'>Viewed Listings</header>
            <div className='top-div'>
            <div className="listings-grid">
                {viewedListings.length ? viewedListings.map((listing, index) => (
                <Listing
                    key={index}
                    title={listing.description}
                    description={listing.description}
                    price={`$${listing.price}/month`}
                    onClick={() => handleListingClick(listing.id)}
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