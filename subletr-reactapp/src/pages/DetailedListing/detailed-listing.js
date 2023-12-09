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

/**
 * The DetailedListing component.
 * @function
 * @name DetailedListing
 * @description The component that displays the detailed view of a listing.
 * @returns {JSX.Element} The JSX element representing the DetailedListing component.
 */
export default function DetailedListing() {
    const {
        listings,
        initiateRent
    } = useContext(ListingsContext)

    const { listing_id } = useParams()
    
    let listing_data = listings.find(item => item._id === listing_id)
    
    const images = [defaultImage, defaultImage, defaultImage, defaultImage];

    return listing_data ? (
      <div className="listing-wrapper">
        <div className="heading-wrapper">
          <ListingHeading
            title={
              listing_data.address.split(",")[0] +
              ", " +
              listing_data.address.split(",")[1]
            }
            rent={listing_data.rent}
          />
        </div>

        <div className="wrapper-image">
          <ListingImageCard
            images={
              listing_data.listingPictures &&
              listing_data.listingPictures.length
                ? listing_data.listingPictures
                : images
            }
          />
        </div>

        <div className="wrapper-chips">
          <ChipArray
            items={listing_data.amenities ? listing_data.amenities : []}
          />
        </div>

        <div className="bottom-listing">
          <BottomElement
            description={listing_data.description}
            biography={listing_data.bio}
            startDate={listing_data.startDate}
            endDate={listing_data.endDate}
            owner="Jason"
            onReserve={() => initiateRent(listing_id)}
          />
        </div>
      </div>
    ) : (
      <div></div>
    );
}





