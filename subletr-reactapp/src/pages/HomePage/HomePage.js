import React, { useContext } from 'react';
import '../../App.css';
import Listing from '../../components/listing.js';
import { Pagination } from '@mui/material';
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { ListingsContext } from '../../context/ListingsProvider';
import '../../App.css';


export default function HomePage() {
    const {
        listings,
        setListings,
        listingsWidthFactor,
        setListingsRowCount,
        listingsRowCount,
    } = useContext(ListingsContext)

    const handleViewMore = () => {
        setListingsRowCount(listingsRowCount+3)
    }


    return (
        <div className='page-height' style={{overflow: 'auto'}}>   
            <div className="listings-grid">
                {listings.slice(0, listingsWidthFactor*listingsRowCount).map((listing, index) => (
                <Listing
                    key={index}
                    title={listing.description}
                    description={listing.description}
                    price={`$${listing.price}/night`}
                />
                ))}
            </div>
            {listingsWidthFactor*listingsRowCount < listings.length && 
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <button className='view-more-button' onClick={() => handleViewMore()}>
                        View More
                    </button>
                </div>
            }

            {/* <div className="pagination">
                <Pagination
                count={Math.ceil(listings.length / listingsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                shape="rounded"
                />
            </div> */}
        </div>
    )
}