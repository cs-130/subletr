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

function Listing({data, onClick}) 
  
{
  console.log(data)
  // State to track whether the listing is liked
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(prevIsLiked => !prevIsLiked); // Toggle isLiked state
  };

  return (
    <Card style={{ width: '20%', margin: '10px', position: 'relative', height: 300, elevation: 0, boxShadow: 'none', borderRadius: '15px'}} onClick={() => onClick()}>
      <CardMedia
        component="img"
        height="200"
        // image={URL.createObjectURL(data.listingPictures[0]) || defaultImage}
        image={defaultImage}
        // alt={location}
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
            {data.address}
          </Typography>
          <Typography variant="body2" noWrap>
            {data.startDate}
          </Typography>
        </Box>
        <Typography variant="subtitle2" noWrap style={{ marginTop: '0px' }}>
            ${data.rent} USD/Month
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: '5px' }}>
          {data.description}
        </Typography>
        <Typography variant="body2" color="black" style={{ marginTop: '0px' }}>
          {data.accommodationType}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Listing;
