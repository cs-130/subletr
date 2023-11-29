import React, { useContext, useState } from 'react';
import '../../App.css';
import Listing from '../../components/listing.js';
import { Pagination } from '@mui/material';
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { ListingsContext } from '../../context/ListingsProvider';
import '../../App.css';
import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material';
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterComponent from '../../components/filter.js';

export default function HomePage() {
    const {
        listings,
        setListings,
        listingsWidthFactor,
        setListingsRowCount,
        listingsRowCount,
    } = useContext(ListingsContext)

    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const toggleFilter = () => {
        // Toggle filter visibility
        setIsFilterVisible((prevState) => !prevState);
    };

    const navigate = useNavigate()

    const handleViewMore = () => {
        setListingsRowCount(listingsRowCount+3)
    }

    const handleListingClick = (listing_id) => {
        navigate(`/${listing_id}`)
    }


    return (
        <div className='page-height' style={{ overflow: 'auto' }}>   
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '12px'}}>
                <Box mt={5} width="60%"
                // display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
                >
                    <TextField
                    variant="outlined"
                    placeholder="Search sublets..."
                    size="small"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                        <InputAdornment
                            position="start"
                            style={{ marginRight: "8px" }}
                        >
                            <SearchIcon color="action" />
                        </InputAdornment>
                        ),
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            edge="end"
                            aria-label="filter"
                            onClick={toggleFilter}
                            >
                            <FilterListIcon />
                            </IconButton>
                        </InputAdornment>
                        ),
                    }}
                    />
                    {isFilterVisible && <FilterComponent />}
                </Box>
            </div>
            <div className="listings-grid">
                {listings.slice(0, listingsWidthFactor * listingsRowCount).map((listing, index) => (
                    
                    <Listing
                        key={index}
                        title={listing.description}
                        description={listing.description}
                        price={`$${listing.price}/month`}
                        onClick={() => handleListingClick(listing.id)}
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