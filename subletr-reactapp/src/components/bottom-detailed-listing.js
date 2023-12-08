import React, { useContext } from "react";
import { UserContext } from '../context/UserContext';
import { Grid, Paper, Typography, Button } from "@mui/material";

/**
 * A two-column layout component.
 * @function
 * @name TwoColumnLayout
 * @param {string} description - The description to display in the left column.
 * @param {string} biography - The biography to display in the right column.
 * @param {string} startDate - The start date of the stay.
 * @param {string} endDate - The end date of the stay.
 * @param {string} owner - The owner of the stay.
 * @param {Function} onReserve - The function to call when the "Reserve your spot" button is clicked.
 * @returns {JSX.Element} The JSX element representing the TwoColumnLayout component.
 * @description The component that displays the two-column layout.
 */
const TwoColumnLayout = ({
  description,
  biography,
  startDate,
  endDate,
  owner,
  onReserve,
}) => {
  const {
    conversationIds,
    setConversationIds
  } = useContext(UserContext)
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} md={7}>
        <Typography variant="h5">Description</Typography>
        <Typography>{description}</Typography>
      </Grid>
      <Grid item xs={12} md={5} sx={{ marginTop: "" }}>
        <Paper
          style={{
            backgroundColor: "#f5fff5",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <Typography variant="h6">
            This stay is available from{" "}
            {new Date(startDate).toLocaleString("en-US", {
              month: "short",
              year: "numeric",
            })}{" "}
            to{" "}
            {new Date(endDate).toLocaleString("en-US", {
              month: "short",
              year: "numeric",
            })}{" "}
            without renewal!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "8px" }}
            onClick={() => onReserve()}
          >
            Reserve your spot!
          </Button>
          <Typography variant="caption">or</Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "8px" }}
            //onClick={() => conversationIds.includes(ownerId) ? setConversationIds(conversationIds.push(ownerId)) : null}
            href="/messages"
          >
            Chat with {owner}
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} md={7} style={{ marginBottom: "50px" }}>
        <Typography variant="h5" gutterBottom>
          Subletter Bio
        </Typography>
        <Typography>{biography}</Typography>
      </Grid>
    </Grid>
  );
};

export default TwoColumnLayout;
