import React from 'react';
import ListingImageCard from '../../components/listing-image-card.js' 
import defaultImage from '../../images/default.jpg';
import ListingHeading from '../../components/listing-heading.js'
import '../../App.css'
import ChipArray from '../../components/listing-chips.js';
import BottomElement from '../../components/bottom-detailed-listing.js'

export default function DetailedListing() {
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
    
    return (

    <div className='listing-wrapper'>
            <div className='heading-wrapper'>
                <ListingHeading
                title="Unique master bedroom in Westwood Villa"
                rating={4.8}
                reviewCount={28}
                rent="$2,500"
                reviewLink="#reviews" 
            />        
      </div>

        <div className="wrapper-image">   
            <ListingImageCard quotes={quotes} images={images}/>
        </div>

        <div className="wrapper-chips">
            <ChipArray items={chipData} onProfileClick={() => { console.log('Profile link clicked!')}}/>
        </div>    

        <div className='bottom-listing'>
        <BottomElement
            biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est. Sit amet facilisis magna etiam tempor orci eu. Faucibus ornare suspendisse sed nisi lacus. Mollis aliquam ut porttitor leo. Nunc sed velit dignissim sodales. Condimentum vitae sapien pellentesque habitant morbi tristique. Neque laoreet suspendisse interdum consectetur. Non quam lacus suspendisse faucibus interdum. Lorem sed risus ultricies tristique nulla aliquet enim. Justo eget magna fermentum iaculis.
            Orci sagittis eu volutpat odio facilisis. Id donec ultrices tincidunt arcu non sodales neque sodales. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Condimentum lacinia quis vel eros donec ac odio. "
            startDate="December 3rd"
            endDate="July 5th"
            owner="Jason"
        />
        </div>
    
    </div>

    )
}


