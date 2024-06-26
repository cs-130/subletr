import React, { useState, useContext } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import defaultImage from "../images/default.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { UserContext } from "../context/UserContext";

/**
 * The Listing component.
 * @param {object} props - The component props.
 * @param {object} props.data - The data object that represents a listing.
 * @param {Function} props.onClick - The function called when the listing is clicked.
 * @param {number} [props.favoriteMode=0] - The favorite mode for the listing.
 * @param {Function} [props.handleDelete=null] - The function called when the listing delete is clicked.
 * @returns {JSX.Element} The JSX element representing the Listing component.
 */
function Listing({ data, onClick, favoriteMode = 0, handleDelete = null }) {
  const { favoriteListing } = useContext(UserContext);
  // State to track whether the listing is liked
  const [isLiked, setIsLiked] = useState(false);

  /**
   * Handles toggling the like status of the listing.
   * @param {Event} e - The click event.
   */
  const handleLikeToggle = (e) => {
    e.stopPropagation();
    if (favoriteMode === 0) {
      if (!isLiked) {
        favoriteListing(data._id);
      }
      setIsLiked((prevIsLiked) => !prevIsLiked); // Toggle isLiked state
    }
  };

  return (
    <Card
      style={{
        width: "20%",
        margin: "10px",
        position: "relative",
        height: 300,
        elevation: 0,
        boxShadow: "none",
        borderRadius: "15px",
      }}
      onClick={() => onClick()}
    >
      <CardMedia
        component="img"
        height="200"
        // image={URL.createObjectURL(data.listingPictures[0]) || defaultImage}
        image={
          data.listingPictures && data.listingPictures.length
            ? data.listingPictures[0]
            : defaultImage
        }
        // alt={location}
      />
      {handleDelete && (
        <div
          className="image-close"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}
      <IconButton
        style={{
          position: "absolute",
          top: 160,
          right: 0,
        }}
        onClick={(e) => handleLikeToggle(e)}
      >
        {favoriteMode === 2 || isLiked ? (
          <FavoriteIcon style={{ color: "red" }} />
        ) : favoriteMode === 1 ? (
          <div />
        ) : (
          <FavoriteBorderIcon style={{ color: "white" }} />
        )}
      </IconButton>
      <CardContent style={{ padding: 10 }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" noWrap>
            {data.address.split(",")[0]}
          </Typography>
          <Typography variant="body2" noWrap>
            {new Date(data.startDate).toLocaleString("en-US", {
              month: "short",
              year: "numeric",
            })}{" "}
            -{" "}
            {new Date(data.endDate).toLocaleString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </Typography>
        </Box>
        <Typography variant="subtitle2" noWrap style={{ marginTop: "0px" }}>
          ${data.rent} USD/Month
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ marginTop: "5px" }}
        >
          {data.description}
        </Typography>
        <Typography variant="body2" color="black" style={{ marginTop: "0px" }}>
          {data.accommodationType}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Listing;
