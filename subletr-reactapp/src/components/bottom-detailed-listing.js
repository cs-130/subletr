import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';

const TwoColumnLayout = ({ description, biography, startDate, endDate, owner, onReserve }) => {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} md={7}>
      <Typography variant="h5">
          Description
        </Typography>
        <Typography>
          {description}
        </Typography>
      </Grid>
      <Grid item xs={12} md={5} sx={{ marginTop: "" }}>
        <Paper
          style={{
            backgroundColor: "#f5fff5",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" >
            This stay is available from {new Date(startDate).toLocaleString('en-US', { month: 'short', year: 'numeric'})} to {new Date(endDate).toLocaleString('en-US', { month: 'short',  year: 'numeric'})} without renewal!
          </Typography>
          <Button variant="contained" color="primary" style={{ margin: "8px" }} onClick={() => onReserve()}>
            Reserve your spot!
          </Button>
          <Typography variant="caption">or</Typography>
          <Button variant="contained" color="primary" style={{ margin: "8px" }}>
            Chat with {owner}
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} md={7} style={{marginBottom: '50px'}}>
        <Typography variant="h5" gutterBottom>
          Subletter Bio
        </Typography>
        <Typography>{biography}</Typography>
      </Grid>
    </Grid>
  );
};

export default TwoColumnLayout;
