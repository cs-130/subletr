import React, { useContext } from 'react';
import './profile.css'
import Listing from '../../components/listing';
import { UserContext } from '../../context/UserContext';


/**
 * The RentalHistory component.
 * @returns {JSX.Element} The JSX element representing the RentalHistory component.
 */

const RentalHistory = () => {
    const {
        rentalHistory,
    } = useContext(UserContext)

    const handleListingClick = () => {
        console.log('click')
    }

    return (
        <>
            <header className='header1'>Rental History</header>
            <div className='top-div'>
            <div className="listings-grid">
                {rentalHistory.length ? rentalHistory.map((listing, index) => (
                <Listing
                    key={index}
                    data={listing}
                    onClick={() => handleListingClick(listing.id)}
                />
                    ))
                :
                <div style={{marginTop: "10vh"}}>
                    Looks like you have not made any rentals yet!
                </div>
                }
            </div>
            </div>
        </>
    )

}

export default RentalHistory