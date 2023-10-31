import React, { useContext } from 'react';
import '../../App.css';
import Listing from '../../components/listing.js';
import { Pagination } from '@mui/material';
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { ListingsContext } from '../../context/ListingsProvider';

export default function HomePage() {
    const {
        listings,
        setListings,
        currentPage,
        setCurrentPage,
        listingsPerPage,
    } = useContext(ListingsContext)

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const currentListings = listings.slice(
        (currentPage - 1) * listingsPerPage,
        currentPage * listingsPerPage
    );


    return (
        <div className="">   
            <div className="listings-grid">
                {currentListings.map((listing, index) => (
                <Listing
                    key={index}
                    title={listing.description}
                    description={listing.description}
                    price={`$${listing.price}/night`}
                />
                ))}
            </div>

            <div className="pagination">
                <Pagination
                count={Math.ceil(listings.length / listingsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                shape="rounded"
                />
            </div>
        </div>
    )
}