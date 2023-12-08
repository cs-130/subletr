import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

/**
 * The ChipArray component.
 * @param {object} props - The component props.
 * @param {Array<string>} props.items - The array of items for the chips.
 * @returns {JSX.Element} The JSX element representing the ChipArray component.
 */
const ChipArray = ({ items }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Stack direction="row">
        {items.map((item, index) => (
          <Chip sx={{margin: '5px'}} key={index} label={item} />
        ))}
      </Stack>
    </Box>
  );
};

export default ChipArray;
