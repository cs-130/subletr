import React from "react";
import {
  Box,
  Button,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import Breadcrumbs from "./breadcrumbs.js";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import Logo from "../images/logo.png";
import FilterComponent from "./filter.js";
import { useState } from "react";
const BACKEND_DOMAIN = process.env.NODE_ENV == "production" ? "https://subletr-ibif.vercel.app" : "http://localhost:5000";

/**
 * The HeaderComponent component.
 * @function
 * @name HeaderComponent
 * @description The component that displays the header section for the home listings page.
 * @returns {JSX.Element} The JSX element representing the HeaderComponent.
 */
function HeaderComponent() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  /**
   * Toggles the filter visibility.
   */
  const toggleFilter = () => {
    setIsFilterVisible((prevState) => !prevState);
  };

  return (
    <Box className="header" display="flex" flexDirection="column" px={3} py={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        width="100%"
      >
        <Box display="flex" alignItems="center">
          <img src={Logo} alt="Subletr Logo" className="logo" />
        </Box>

        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <Breadcrumbs />
          <Box mt={5} width="100%">
            <TextField
              variant="outlined"
              placeholder="Search sublets..."
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    style={{ marginRight: "8px" }}
                  >
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="filter"
                      onClick={toggleFilter}
                    >
                      <FilterListIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <Button
            variant="outlined"
            sx={{ borderColor: "green", color: "green" }}
            onClick={() =>
              (window.location.href = `${BACKEND_DOMAIN}/auth/google`)
            }
          >
            Profile
          </Button>
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
