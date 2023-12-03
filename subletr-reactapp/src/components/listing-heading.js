import React from 'react';
import { Box, Typography, Link, Button } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';

// Define the props that the component will accept
const ListingHeading = ({ title, rating, reviewCount, rent, reviewLink }) => {
  return (
    <Box display="flex" flexDirection="column" marginBottom='.5rem'>
      <Typography variant="h5" component="h1">
        {title}
      </Typography>
      <Box display="flex" alignItems="center" gap='.5rem'>
        {/* <StarRateIcon color="secondary" />
        <Typography variant="subtitle1" component="span" style={{ marginRight: '8px' }}>
          {rating}
        </Typography> */}
        {/* <Link href={reviewLink} underline="hover">
          View all {reviewCount} reviews
        </Link> */}
        <Typography variant="subtitle1" color="textSecondary">
        ${rent} / month
      </Typography>
      </Box>
    </Box>
  );
};

export default ListingHeading;

