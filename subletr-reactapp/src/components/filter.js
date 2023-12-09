import React, { useState } from 'react';
import { 
    Box, 
    Typography, 
    Slider, 
    Button 
} from '@mui/material';
import { listingFeatures } from "./FeatureInfo.js";

/**
 * The FilterComponent component.
 * @function
 * @name FilterComponent
 * @description The component that displays the filter options.
 * @param {object} props - The component props.
 * @param {Function} props.handleFilterChange - The function to call when the filter changes.
 * @returns {JSX.Element} The JSX element representing the FilterComponent.
 */
function FilterComponent(props) {
    const [accommodation, setAccommodation] = useState('All');
    const [spots, setSpots] = useState(1);
    const [selectedHashtags, setSelectedHashtags] = useState([]);
    const [rentRange, setRentRange] = useState([0, 10000]);

    const handleAccommodation = (newAccommodation) => {
        setAccommodation(newAccommodation);
        props.handleFilterChange(newAccommodation, selectedHashtags, spots, rentRange);
    };

    const handleHashtagClick = (hashtag) => {
        setSelectedHashtags(prevState => {
            if (prevState.includes(hashtag)) {
                props.handleFilterChange(
                  accommodation,
                  prevState.filter((tag) => tag !== hashtag),
                  spots,
                  rentRange
                );
                return prevState.filter(tag => tag !== hashtag);
            } else {
                props.handleFilterChange(
                  accommodation,
                  [...prevState, hashtag],
                  spots,
                  rentRange
                );
                return [...prevState, hashtag];
            }
        });
    };

    const handleSpots = (event, newSpots) => {
        setSpots(newSpots);
        props.handleFilterChange(
          accommodation,
          selectedHashtags,
          newSpots,
          rentRange
        );
    };

    const handleRentRange = (event, newRentRange) => {
        setRentRange(newRentRange);
        props.handleFilterChange(
          accommodation,
          selectedHashtags,
          spots,
          newRentRange
        );
    };

    // const hashtags = ["Wifi", "Parking", "Pool"]; 

    return (
      <Box className="filter-container">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          <Typography variant="h6" className="filter-hbtext">
            Filters
          </Typography>
        </Box>
        <Box p={2}>
          <Typography variant="subtitle1" className="filter-htext">
            Genre of accommodation
          </Typography>
          <Typography variant="body2" className="filter-text">
            What sort of place do you prefer?
          </Typography>
          <Box mt={2}>
            <Button
              variant={
                accommodation === "Shared Bedroom" ? "contained" : "outlined"
              }
              color="primary"
              onClick={() => handleAccommodation("Shared Bedroom")}
              className="filter-button"
            >
              Shared Room
            </Button>
            <Button
              variant={
                accommodation === "SHARED_ACCOMMODATION"
                  ? "contained"
                  : "outlined"
              }
              color="primary"
              onClick={() => handleAccommodation("SHARED_ACCOMMODATION")}
              className="filter-button"
            >
              Shared Accommodation
            </Button>
            <Button
              variant={
                accommodation === "Whole Unit" ? "contained" : "outlined"
              }
              color="primary"
              onClick={() => handleAccommodation("Whole Unit")}
              className="filter-button"
            >
              Whole Unit
            </Button>
            <Button
              variant={accommodation === "All" ? "contained" : "outlined"}
              color="primary"
              onClick={() => handleAccommodation("All")}
              className="filter-button"
            >
              Any
            </Button>
          </Box>

          <Typography variant="subtitle1" mt={4} className="filter-htext">
            Amenities
          </Typography>
          <Typography variant="body2" className="filter-text">
            What features do you need in a place?
          </Typography>
          <Box mt={2}>
            {listingFeatures.map((hashtag) => (
              <Button
                key={hashtag}
                variant={
                  selectedHashtags.includes(hashtag) ? "contained" : "outlined"
                }
                color="primary"
                onClick={() => handleHashtagClick(hashtag)}
                className="filter-button"
              >
                {hashtag}
              </Button>
            ))}
          </Box>

          <Typography variant="subtitle1" mt={4} className="filter-htext">
            Available beds
          </Typography>
          <Typography variant="body2" className="filter-text">
            How many available beds do you need?
          </Typography>
          <Slider
            step={1}
            marks
            min={0}
            max={8}
            valueLabelDisplay="auto"
            className="slider"
            value={spots}
            onChange={handleSpots}
          />
          <Typography variant="subtitle1" mt={4} className="filter-htext">
            Rent Range
          </Typography>
          <Typography variant="body2" className="filter-text">
            What can you afford?
          </Typography>
          <Slider
            getAriaLabel={() => "Rent"}
            value={rentRange}
            min={0}
            max={10000}
            step={100}
            onChange={handleRentRange}
            valueLabelDisplay="auto"
            valueLabelFormat={(x) => `$${x}`}
            disableSwap
          />
        </Box>
      </Box>
    );
}

export default FilterComponent;