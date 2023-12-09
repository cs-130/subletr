import React, { useContext } from 'react';
import { Box, Button } from '@mui/material';
import Breadcrumbs from './breadcrumbs.js';
import Logo from '../images/logo.png';
import FilterComponent from './filter.js';
import { useState } from 'react';
import { UserContext } from '../context/UserContext.js';
const BACKEND_DOMAIN = process.env.NODE_ENV == "production" ? "https://subletr-ibif.vercel.app" : "http://localhost:5000";

/**
 * The HeaderComponent component.
 * @returns {JSX.Element} The JSX element representing the HeaderComponent.
 */
function HeaderComponent() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const {
    userId,
    logUserOut,
  } = useContext(UserContext)
  // console.log(userId)
  return (
    <Box className="header" display="flex" flexDirection="column" px={3} py={2}>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" width="100%">
        <Box display="flex" alignItems="center">
          <img src={Logo} alt="Subletr Logo" className="logo" onClick={() => window.location.href = "/"} />
        </Box>

        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <Breadcrumbs />
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          { userId ?
            <Button
              variant="outlined"
              sx={{ borderColor: "green", color: "green" }}
              onClick={() =>
                logUserOut()
              }
            >
              Logout
            </Button>
            :
            <Button
              variant="outlined"
              sx={{ borderColor: "green", color: "green" }}
              onClick={() =>
                (window.location.href = `${BACKEND_DOMAIN}/auth/google`)
              }
            >
              Login
            </Button>
          }
        </Box>
      </Box>
      {isFilterVisible && <FilterComponent />}
    </Box>
    
  );
}

export default HeaderComponent;