import React from 'react';
import { Box, Typography } from '@mui/material';

/**
 * The ListingHeading component.
 * @param {object} props - The component props.
 * @param {string} props.title - The title of the listing.
 * @param {number} props.rent - The rent of the listing.
 * @returns {JSX.Element} The JSX element representing the ListingHeading component.
 */
const ListingHeading = ({ title, rent }) => {
  return (
    <Box display="flex" flexDirection="column" marginBottom='.5rem'>
      <Typography variant="h5" component="h1">
        {title}
      </Typography>
      <Box display="flex" alignItems="center" gap='.5rem'>
        <Typography variant="subtitle1" color="textSecondary">
        ${rent} / month
      </Typography>
      </Box>
    </Box>
  );
};

export default ListingHeading;

