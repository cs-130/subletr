import React, {useContext, useState} from 'react';
import './profile.css'
import { TextField, Button, Box, Avatar } from '@mui/material';
import Listing from '../../components/listing';
import { UserContext } from '../../context/UserContext';
import MyListings from './MyListings';
import ViewedListings from './ViewedListings';
import RentalHistory from './RentalHistory';

function Profile() {

  const {
    viewedListings,
    getMyListings,
    getViewedListings,
    getRentalhistory,
  } = useContext(UserContext)

  const [page, setPage] = useState(0)

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
        getRentalhistory()
        break
    }

  }

  const PageData = () => {
    if (page == 0) {
      return <MyListings/>
    }
    if (page == 1) {
      return <ViewedListings/>
    }
    if (page == 2) {
      return <RentalHistory/>
    }
  }

  return (
    <div className="profile-container">
      <div className='left-nav'> 
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* <Button variant="contained" sx={{ width: '110%', marginBottom: '1vh' }}>Profile</Button> */}
          <Button variant="contained" sx={{ width: '110%', marginBottom: '1vh' }} onClick={() => {handleMenuClick(0)}}>Manage Listings</Button>
          <Button variant="contained" sx={{ width: '110%', marginBottom: '1vh' }} onClick={() => {handleMenuClick(1)}}>Viewed Listings</Button>
          <Button variant="contained" sx={{ width: '110%',marginBottom: '1vh' }} onClick={() => {handleMenuClick(2)}}>Rental History</Button>
          {/* <Button variant="contained" sx={{ width: '110%'}}>Legal</Button>  */}
        </Box>
      
      </div>

      <div className='main-body'>
        <PageData/>
      </div>
    </div>
  );
}

export default Profile;
