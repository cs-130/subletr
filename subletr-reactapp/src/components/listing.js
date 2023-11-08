import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import defaultImage from '../images/default.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const AccommodationType = {
  SHARED_ACCOMMODATION: "Shared Accommodation",
  SHARED_ROOM: "Shared Room",
  WHOLE_ACCOMMODATION: "Whole Accommodation"
};

function Listing({ 
  imageUrl, 
  location = "Westwood, CA", 
  dateRange = "Dec 15 - Jan 15", 
  price, 
  description = "Details Not Available", 
  accommodationType = AccommodationType.SHARED_ACCOMMODATION}) 
{
  // State to track whether the listing is liked
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(prevIsLiked => !prevIsLiked); // Toggle isLiked state
  };

  return (
    <Card style={{ width: '20%', margin: '10px', position: 'relative', height: 300, elevation: 0, boxShadow: 'none', borderRadius: '15px'}}>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl || defaultImage}
        alt={location}
      />
    <IconButton 
        style={{ 
            position: 'absolute', 
            top: 160, 
            right: 0
        }} 
        onClick={handleLikeToggle}
    >
        {isLiked ? 
            <FavoriteIcon style={{ color: 'red' }} /> : 
            <FavoriteBorderIcon style={{ color: 'white' }} />
        }
    </IconButton>
      <CardContent style={{ padding: 10 }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" noWrap>
            {location}
          </Typography>
          <Typography variant="body2" noWrap>
            {dateRange}
          </Typography>
        </Box>
        <Typography variant="subtitle2" noWrap style={{ marginTop: '0px' }}>
            {price}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: '5px' }}>
          {description}
        </Typography>
        <Typography variant="body2" color="black" style={{ marginTop: '0px' }}>
          {accommodationType}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Listing;
