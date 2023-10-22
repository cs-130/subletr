import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/listings"
        >
          <StarIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Listings
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
        >
          <StarIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          List your place
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
