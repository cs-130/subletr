import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import defaultImage from '../images/default.jpg';
import FavoriteIcon from '@mui/icons-material/Favorite';

const AccommodationType = {
  SHARED_ACCOMMODATION: "Shared Accommodation",
  SHARED_ROOM: "Shared Room",
  WHOLE_ACCOMMODATION: "Whole Accommodation"
};

function Listing({ 
  imageUrl, 
  location = "Westwood, CA",  //TODO: Edit to make two elements, city and state.
  dateRange = "Dec 15 - Jan 15", 
  price, 
  details = "Details Not Available", 
  accommodationType = AccommodationType.SHARED_ACCOMMODATION}) 
  {
  return (
    <Card style={{ maxWidth: 345, margin: '20px', position: 'relative', height: 300, elevation: 0, boxShadow: 'none', borderRadius: '15px'}}>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl || defaultImage}
        alt={location}
      />
      <IconButton style={{ position: 'absolute', top: 160, right: 0, color: 'red' }}>
        <FavoriteIcon />
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
        <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
          {details}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: '0px' }}>
          {accommodationType}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Listing;
