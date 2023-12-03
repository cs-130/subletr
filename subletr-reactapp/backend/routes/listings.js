const express = require("express");
const router = express.Router();

const ListingController = require("../controllers/listings");
const { ensureAuth } = require("../middlewares/auth");

router.get("/", ensureAuth, ListingController.getAllListings);

router.post("/create-listing", ensureAuth, ListingController.createListing);

router.get("/:userId", ensureAuth, ListingController.getUserListings)

router.get("/:userId/viewed", ensureAuth, ListingController.getViewedListings)

router.get("/:userId/rental", ensureAuth, ListingController.getRentalHistory)


module.exports = router;
