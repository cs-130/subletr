const Customer = require("../models/Customer");
const Listing = require("../models/Listing");

const getAllListings = async (req, res) => {
  try {
    console.log("entered get all listings");
    const allListings = await Listing.find().lean();
    return res.json(allListings);
  } catch (err) {
    return res
      .status(500)
      .json({ message: `error in fetching all listings: ${err}` });
  }
};

const createListing = async (req, res) => {
  try {
    console.log("entered create listing", req.body);
    let newListing = new Listing({ ...req.body });
    await newListing.save();
    return res.json({ message: "success" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `error in creating listing ${err}` });
  }
};

const getUserListings = async (req, res) => {
  try {
    console.log("entered get user listings: ", req.userId, req);
    const allListings = await Listing.find({letterId: req.userId}).lean();
    return res.json(allListings);
  } catch (err) {
    return res
      .status(500)
      .json({ message: `error in fetching all listings: ${err}` });
  }
};

module.exports = { getAllListings, createListing, getUserListings };