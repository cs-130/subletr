import React, { useContext, useState, useEffect } from 'react';
import '../../App.css';
import Listing from '../../components/listing.js';
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { ListingsContext } from '../../context/ListingsProvider';
import '../../App.css';
import { useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material';
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterComponent from '../../components/filter.js';

/**
 * The HomePage component for the application's home page.
 * Displays listings and provides filtering options.
 * @returns {JSX.Element} The JSX element representing the HomePage component.
 */
export default function HomePage() {
  const {
    listings,
    listingsWidthFactor,
    setListingsRowCount,
    listingsRowCount,
    getAllListings,
  } = useContext(ListingsContext);

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [accommodationType, setAccommodationType] = useState("All");
  const [amenities, setAmenities] = useState([]);
  const [rentRange, setrentRange] = useState([0, 10000]);
  const [spots, setSpots] = useState(1);

  /**
   * Toggles the filter visibility.
   */
  const toggleFilter = () => {
    setIsFilterVisible((prevState) => !prevState);
  };

  const navigate = useNavigate();

  /**
   * Handles the "View More" button click.
   * Increases the number of displayed listings.
   */
  const handleViewMore = () => {
    setListingsRowCount(listingsRowCount + 3);
  };

  /**
   * Handles the click event on a listing to navigate to the detailed listing page.
   * @param {string} listing_id - The ID of the clicked listing.
   */
  const handleListingClick = (listing_id) => {
    navigate(`/${listing_id}`);
  };

  /**
   * Handles the change event in the filter component and filters the listings accordingly.
   * @param {string} accommodationType - The selected accommodation type.
   * @param {Array<string>} amenities - The selected amenities.
   * @param {number} spots - The selected number of spots.
   * @param {number[]} rentRange - The selected rent range.
   */
  const handleFilterChange = (
    accommodationType,
    amenities,
    spots,
    rentRange
  ) => {
    // filter based on the filter criteria
    setAccommodationType(accommodationType);
    setAmenities(amenities);
    setSpots(spots);
    setrentRange(rentRange);
  };

  /**
   * Determines whether a listing should be displayed based on the filter criteria.
   * @param {object} listing - The listing object.
   * @returns {boolean} `true` if the listing should be displayed, `false` otherwise.
   */
  const displayListing = (listing) => {
    let display = false;
    // console.log(listing);
    if (
      accommodationType === "All" ||
      accommodationType === listing.listingType
    ) {
      display = true;
    } else {
      display = false;
    }

    if (display && amenities.length > 0) {
      display = listing.amenities.some((r) => amenities.includes(r));
    }

    if (display && spots > 0) {
      console.log(listing.availSpots);
      display = listing.availSpots >= spots;
    }

    if (display) {
      display = listing.rent >= rentRange[0] && listing.rent <= rentRange[1];
    }

    return display;
  };

  useEffect(() => {
    getAllListings();
  }, [getAllListings]);

  return (
    <div className="page-height" style={{ overflow: "auto" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "12px",
        }}
      >
        <Box
          mt={5}
          width="60%"
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
                <InputAdornment position="start" style={{ marginRight: "8px" }}>
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
          {isFilterVisible && (
            <FilterComponent handleFilterChange={handleFilterChange} />
          )}
        </Box>
      </div>
      <div className="listings-grid">
        {listings.length ? (
          listings
            .slice(0, listingsWidthFactor * listingsRowCount)
            .filter(displayListing)
            .map((listing, index) => (
              <Listing
                key={index}
                data={listing}
                onClick={() => handleListingClick(listing._id)}
              />
            ))
        ) : (
          <div></div>
        )}
      </div>
      {listingsWidthFactor * listingsRowCount < listings.length && (
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <button className="view-more-button" onClick={() => handleViewMore()}>
            View More
          </button>
        </div>
      )}
    </div>
  );
}