import React, {useContext, useEffect} from 'react';
import './profile.css'
import { Button, Box } from '@mui/material';
import { UserContext } from '../../context/UserContext';
import MyListings from './MyListings';
import ViewedListings from './ViewedListings';
import RentalHistory from './RentalHistory';
import Messages from "../Messages/Messages";

/**
 * The Profile component.
 * @returns {JSX.Element} The JSX element representing the Profile component.
 */
function Profile() {
  const {
    userId,
    viewedListings,
    getMyListings,
    getViewedListings,
    getRentalHistory,
    page,
    setPage,
  } = useContext(UserContext)

  useEffect(() => {
    if (!userId) 
        window.location.href = `http://localhost:5000/auth/google`
  }, [userId])

  useEffect(() => {
    getMyListings();
  }, [getMyListings]);

  const handleMenuClick = (i) => {
    setPage(i)
    switch (i) {
      case 0:
        getMyListings()
        break
      case 1:
        getViewedListings()
        break
      case 2:
        getRentalHistory()
        break
      case 3:
        // do nothing
        break
    }
  }

  const PageData = () => {
    if (page === 0) {
      return <MyListings/>
    }
    if (page === 1) {
      return <ViewedListings/>
    }
    if (page === 2) {
      return <RentalHistory/>
    }
    if (page === 3) {
      return <Messages/>
    }
    return <div>Page not found</div>
  }

  return (
    <div className="profile-container">
      <div className="left-nav">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Button variant="contained" sx={{ width: '110%', marginBottom: '1vh' }}>Profile</Button> */}
          <Button
            variant="contained"
            sx={{ width: "110%", marginBottom: "1vh" }}
            onClick={() => {
              handleMenuClick(0);
            }}
          >
            Manage My Listings
          </Button>
          <Button
            variant="contained"
            sx={{ width: "110%", marginBottom: "1vh" }}
            onClick={() => {
              handleMenuClick(1);
            }}
          >
            Favorited Listings
          </Button>
          <Button
            variant="contained"
            sx={{ width: "110%", marginBottom: "1vh" }}
            onClick={() => {
              handleMenuClick(2);
            }}
          >
            Rental History
          </Button>
          <Button
            variant="contained"
            sx={{ width: "110%", marginBottom: "1vh" }}
            onClick={() => {
              handleMenuClick(3);
            }}
          >
            Messages
          </Button>
        </Box>
      </div>

      <div className="main-body">
        <PageData />
      </div>
    </div>
  );
}

export default Profile;
