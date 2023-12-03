const express = require("express");
const router = express.Router();

const ListingController = require("../controllers/listings");
const { ensureAuth } = require("../middlewares/auth");

router.get("/get-all-listings", ensureAuth, ListingController.getAllListings);

router.post("/create-listing", ensureAuth, ListingController.createListing);

router.post("/accept-listing", ListingController.acceptListing);

module.exports = router;
