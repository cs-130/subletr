import React from 'react';
import './profile.css'
import { TextField, Button, Box, Avatar } from '@mui/material';

function Profile() {
  return (
    <div className="profile-container">
      <div className='left-nav'> 
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Button variant="contained" sx={{ width: '110%', marginBottom: '1vh' }}>Profile</Button>
          <Button variant="contained" sx={{ width: '110%',marginBottom: '1vh' }}>Listings</Button>
          <Button variant="contained" sx={{ width: '110%',marginBottom: '1vh' }}>Rental History</Button>
          <Button variant="contained" sx={{ width: '110%'}}>Legal</Button> 
        </Box>
      
      </div>

      <div className='main-body'>
        <header className='header1'>Personal Information</header>
        <div className='top-div'>

            <TextField sx={{margin: '5px'}} className="profileInputboxGeneral" label="First Name" labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}></TextField>
            <TextField sx={{margin: '5px'}}className="profileInputboxGeneral" label="Middle Inital" labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}></TextField>
            <TextField sx={{margin: '5px'}}className="profileInputboxGeneral" label="Last Name" labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}></TextField>
            <TextField sx={{margin: '5px'}}className="profileInputboxGeneral" label="Address" labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}></TextField>
            <TextField sx={{margin: '5px'}}className="profileInputboxGeneral" label="Zip Code" labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}></TextField>
            <TextField sx={{margin: '5px'}}className="profileInputboxGeneral" label="State" labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}></TextField>
            <TextField sx={{margin: '5px'}}className="profileInputboxGeneral" label="School (Optional)" labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}></TextField>


            <Box sx={{marginTop: '5vh', display: 'flex'}}>
              <Button sx={{margin: 'auto', width: '20%'}} variant="contained">Submit</Button>
            </Box>
            



        </div>
        <header className='header1'>Public Information</header>

        <div className='bottom-div' style={{ display: 'flex' }}>
          <Box sx={{ marginTop: '2vh', width: '25%' }}>
            <Avatar sx={{ margin: 'auto', width: 200, height: 200 }}></Avatar>
            <Box sx={{ marginTop: '2vh', display: 'flex' }}>
              <Button sx={{ margin: 'auto' }} variant="contained">Upload Image</Button>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', width: "40%", alignItems: 'center' }}>
            <TextField multiline={true} minRows={7} sx={{ width: '100%', marginBottom: '2vh' }} className="biography" label="Biography" labelStyle={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}></TextField>
            <Button sx={{ marginTop: '3vh', width: '40%' }} variant="contained">Submit</Button>
          </Box>
        </div>





      </div>




    </div>
  );
}

export default Profile;
