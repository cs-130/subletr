import { Typography, List, ListItem, ListItemText } from "@mui/material";

const ReviewInfo = ({ formik }) => {
  const { values } = formik;
  return (
    <>
      <Typography variant="overline">Account Details</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Address" secondary={values.address} />
        </ListItem>
      </List>
      <Typography variant="overline">Personal Information</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Rent"
            secondary={values.rent.toLocaleString(undefined, {
              style: "currency",
              currency: "USD",
            })}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Beds Available"
            secondary={values.availSpots}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Current Occupancy"
            secondary={values.currentOccupancy}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Start date"
            secondary={values.startDate.toLocaleDateString()}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="End date"
            secondary={values.endDate.toLocaleDateString()}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Amenities"
            secondary={values.amenities.join(", ")}
          />
        </ListItem>
      </List>
    </>
  );
};

export default ReviewInfo;
