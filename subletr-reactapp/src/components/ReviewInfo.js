import { Typography, List, ListItem, ListItemText, Chip } from "@mui/material";
// import ChipArray from "./listing-chips.js";

const ReviewInfo = ({ formik }) => {
  const { values } = formik;
  return (
    <>
      <Typography component={"span"} variant="overline">
        Account Details
      </Typography>
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
            secondary={values.amenities.map((amenity, index) => (
              <Chip sx={{ margin: "5px" }} key={index} label={amenity} />
            ))}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Description"
            secondary={
              values.generatedDescription !== ""
                ? values.generatedDescription
                : values.userDescription
            }
            sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bio" secondary={values.bio} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Phone Number" secondary={values.phoneNumber} />
        </ListItem>
      </List>
    </>
  );
};

export default ReviewInfo;
