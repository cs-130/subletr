import React, {useContext, useState} from 'react';
import './profile.css'
import { TextField, Button, Box, Avatar } from '@mui/material';
import Listing from '../../components/listing';
import { UserContext } from '../../context/UserContext';


const MyListings = () => {
    const {
        userListings,
    } = useContext(UserContext)


    const handleListingClick = () => {
        console.log('click')
    }

    return (
        <>
            <header className='header1'>My Listings</header>
            <div className='top-div'>
            <div className="listings-grid">
                {userListings.length ? userListings.map((listing, index) => (
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
                    Looks like you have not created any listings yet!
                </div>
                }
            </div>
            </div>
        </>
    )

}

export default MyListings