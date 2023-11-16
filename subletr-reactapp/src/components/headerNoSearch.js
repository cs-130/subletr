import React from 'react';
import { Box, Typography, Button, IconButton, TextField, Icon, InputAdornment } from '@mui/material';
import Breadcrumbs from './breadcrumbs.js';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Logo from '../images/logo.png';
import FilterComponent from './filter.js';
import { useState } from 'react';





function HeaderComponent() {
        const [isFilterVisible, setIsFilterVisible] = useState(false);
      
        const toggleFilter = () => { // Toggle filter visibility
          setIsFilterVisible(prevState => !prevState);
        };

  return (
    <Box className="header" display="flex" flexDirection="column" px={3} py={2}>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" width="100%">
        <Box display="flex" alignItems="center">
          <img src={Logo} alt="Subletr Logo" className="logo" />
        </Box>

        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <Breadcrumbs />
        </Box>
        


        <Box display="flex" alignItems="center" gap={2}>
          <Button variant="outlined" sx={{ borderColor: 'green', color: 'green' }}>Profile</Button>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
      {isFilterVisible && <FilterComponent />}
    </Box>
    
  );
}

export default HeaderComponent;