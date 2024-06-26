import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom'

/**
 * @function
 * @name IconBreadcrumbs
 * @description The component that displays the breadcrumbs.
 * @returns {JSX.Element} The JSX element representing the IconBreadcrumbs component.
 */
export default function IconBreadcrumbs() {
  const navigate = useNavigate()
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}}
          color="inherit"
          onClick={() => navigate("/")}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Listings
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          color="inherit"
          onClick={() => navigate("/manage")}
        >
          <StarIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Manage Listings
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          color="inherit"
          onClick={() => navigate("/listings/create/1")}
        >
          <StarIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Create a Listing
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          color="inherit"
          onClick={() => navigate("/messages")}
        >
          <StarIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Messages
        </Link>
      </Breadcrumbs>
    </div>
  );
}
