import React from 'react';
import ListingImageCard from '../../components/listing-image-card.js' 
import defaultImage from '../../images/default.jpg';
import ListingHeading from '../../components/listing-heading.js'
import '../../App.css'
import ChipArray from '../../components/listing-chips.js';
import BottomElement from '../../components/bottom-detailed-listing.js'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ListingsContext } from '../../context/ListingsProvider.js';

export default function DetailedListing() {
    const {
        listings,
    } = useContext(ListingsContext)

    const { listing_id } = useParams()
    
    let listing_data = listings.find(item => item._id == listing_id)

    console.log(listing_data)

    const quotes = [
        { text: "Amazing place to stay for short term lease...", author: "Jane Doe" },
        { text: "Amazing place to stay for short term lease...", author: "Jane Doe" }
    ];
    
    const images = [defaultImage, defaultImage, defaultImage, defaultImage];

    const chipData = [
        { label: 'Kitchen'},
        { label: 'Swimming Pool'},
        { label: 'Master Bathroom' },
        { label: '...and 4 others' }
      ];
    return ( listing_data ?
    <div className='listing-wrapper'>
            <div className='heading-wrapper'>
                <ListingHeading
                title={listing_data.description}
                // rating={4.8}
                // reviewCount={28}
                rent={listing_data.rent}
                // reviewLink="#reviews" 
            />        
      </div>

        <div className="wrapper-image">   
            <ListingImageCard quotes={quotes} images={images}/>
        </div>

        <div className="wrapper-chips">
            <ChipArray items={listing_data.amenities ? listing_data.amenities : []} onProfileClick={() => { console.log('Profile link clicked!')}}/>
        </div>    

        <div className='bottom-listing'>
        <BottomElement
            biography={listing_data.bio}
            startDate={listing_data.startDate}
            endDate={listing_data.endDate}
            owner="Jason"
        />
        </div>
    
    </div>
        :
        <div>
        </div>
    )
}





