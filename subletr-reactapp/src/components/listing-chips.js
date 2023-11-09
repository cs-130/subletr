import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const ChipArray = ({ items, onProfileClick }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Stack direction="row">
        {items.map((item, index) => (
          <Chip sx={{margin: '5px'}} key={index} label={item.label} />
        ))}
      </Stack>
      <Link component="button" variant="body2" onClick={onProfileClick}>
        Check out people staying here
      </Link>
    </Box>
  );
};

export default ChipArray;
