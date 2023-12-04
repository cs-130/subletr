const express = require("express");
const router = express.Router();

const ListingController = require("../controllers/listings");
const { ensureAuth } = require("../middlewares/auth");

router.get("/", ensureAuth, ListingController.getAllListings);

router.post("/create-listing", ensureAuth, ListingController.createListing);

router.post("/accept-listing", ListingController.acceptListing);

router.get("/:userId", ensureAuth, ListingController.getUserListings)

router.get("/:userId/favorited", ensureAuth, ListingController.getFavoritedListings)

router.get("/:userId/rental", ensureAuth, ListingController.getRentalHistory)

router.post("/favorite", ensureAuth, ListingController.logListingFavorite)

module.exports = router;
