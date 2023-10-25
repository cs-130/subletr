import React, { useState } from 'react';
import { 
    Box, 
    Typography, 
    IconButton, 
    Slider, 
    Button 
} from '@mui/material';

function FilterComponent() {
    const [accommodation, setAccommodation] = useState('ENTIRE_PLACE');
    const [roommates, setRoommates] = useState(4);
    const [selectedHashtags, setSelectedHashtags] = useState([]);

    const handleAccommodation = (newAccommodation) => {
        setAccommodation(newAccommodation);
    };

    const handleHashtagClick = (hashtag) => {
        setSelectedHashtags(prevState => {
            if (prevState.includes(hashtag)) {
                return prevState.filter(tag => tag !== hashtag);
            } else {
                return [...prevState, hashtag];
            }
        });
    };

    const hashtags = ["Wifi", "Parking", "Pool"]; 

    return (
        <Box className="filter-container">
            <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                <Typography variant="h6" className="filter-hbtext">Filters</Typography>
            </Box>
            <Box p={2}>
                <Typography variant="subtitle1" className="filter-htext">Genre of accommodation</Typography>
                <Typography variant="body2" className="filter-text">What sort of place do you prefer?</Typography>
                <Box mt={2}>
                    <Button variant={accommodation === "SHARED_ROOM" ? "contained" : "outlined"} color="primary" onClick={() => handleAccommodation("SHARED_ROOM")} className="filter-button">Shared Room</Button>
                    <Button variant={accommodation === "SHARED_ACCOMMODATION" ? "contained" : "outlined"} color="primary" onClick={() => handleAccommodation("SHARED_ACCOMMODATION")} className="filter-button">Shared Accommodation</Button>
                    <Button variant={accommodation === "ENTIRE_PLACE" ? "contained" : "outlined"} color="primary" onClick={() => handleAccommodation("ENTIRE_PLACE")} className="filter-button">Entire Place</Button>
                </Box>

                <Typography variant="subtitle1" mt={4} className="filter-htext">Hashtags</Typography>
                <Typography variant="body2" className="filter-text">What features do you need in a place?</Typography>
                <Box mt={2}>
                    {hashtags.map(hashtag => (
                        <Button 
                            key={hashtag} 
                            variant={selectedHashtags.includes(hashtag) ? "contained" : "outlined"}
                            color="primary" 
                            onClick={() => handleHashtagClick(hashtag)}
                            className="filter-button">
                            #{hashtag}
                        </Button>
                    ))}
                </Box>

                <Typography variant="subtitle1" mt={4} className="filter-htext">Number of roommates</Typography>
                <Typography variant="body2" className="filter-text">How many heads can you tolerate?</Typography>
                <Slider
                    defaultValue={roommates}
                    step={1}
                    marks
                    min={0}
                    max={12}
                    valueLabelDisplay="auto"
                    className='slider'
                />
            </Box>
        </Box>
    );
}

export default FilterComponent;