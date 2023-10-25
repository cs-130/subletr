import React from 'react';
import { Box, Typography, Button, IconButton, TextField } from '@mui/material';
import Breadcrumbs from './breadcrumbs.js';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../images/logo.png';
import InputAdornment from '@mui/material/InputAdornment';


function HeaderComponent() {
  return (
    <Box className="header" display="flex" flexDirection="column" px={3} py={2}>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" width="100%"> {/* Adjusted alignItems here */}
        <Box display="flex" alignItems="center">
          <img src={Logo} alt="Subletr Logo" className="logo" />
        </Box>

        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <Breadcrumbs />
        </Box>
        
        <Box display="flex" alignItems="center" gap={2}>
          <Button variant="outlined"sx={{ borderColor: 'green', color: 'green'}}>Profile</Button>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderComponent;
