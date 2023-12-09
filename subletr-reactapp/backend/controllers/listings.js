const Customer = require("../models/Customer");
const Listing = require("../models/Listing");
const { sendAwsEmail } = require("../utils/notifications");
const ListingViewLog = require("../models/ListingViewLog");
const ActiveLeases = require("../models/ActiveLeases");

const mongoose = require("mongoose");

/**
 * Retrieves all listings.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
const getAllListings = async (req, res) => {
  try {
    // console.log("entered get all listings");
    const allListings = await Listing.find().lean();
    return res.json(allListings);
  } catch (err) {
    return res
      .status(500)
      .json({ message: `error in fetching all listings: ${err}` });
  }
};

/**
 * Creates a new listing.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
const createListing = async (req, res) => {
  try {
    let newListing = new Listing({
      address: req.body.address,
      rent: req.body.rent,
      availSpots: req.body.availSpots,
      listingType: req.body.accomodationType,
      listingPictures: req.body.images,
      phoneNumber: req.body.phoneNumber,
      amenities: req.body.amenities,
      bio: req.body.bio,
      description: req.body.generatedDescription ? req.body.generatedDescription : req.body.userDescription,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      userId: req.body.userId
    });
    await newListing.save();
    return res.json({ message: "success" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `error in creating listing ${err}` });
  }
};

/**
 * Accepts a listing request.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
const acceptListing = async (req, res) => {
  try {
    const { acceptorId, ownerId } = req.body;

    const acceptor = await Customer.findById(acceptorId);
    const owner = await Customer.findById(ownerId);
    sendAwsEmail(
      "hritik1402@g.ucla.edu",
      acceptor.email,
      "Subletr: You accepted a listing",
      `Dear ${acceptor.fullName}, <br/> <br/>
      
      You have accepted a listing of ${owner.fullName}. <br/>
      
      Please chat with them. More info to follow. <br/><br/>

      Warm Regards, <br/>
      The Subletr Team <br/>
      `
    );

    sendAwsEmail(
      "hritik1402@g.ucla.edu",
      owner.email,
      "Subletr: Your listing was accepted",
      `Dear ${owner.fullName}, <br/> <br/>
      
      Your listing was accepted by ${acceptor.fullName}. <br/>
      
      Please chat with them. More info to follow. <br/><br/>

      Warm Regards, <br/>
      The Subletr Team <br/>
      `
    );

    return res.status(200).json({ message: "Listing accepted" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

/**
 * Retrieves the listings created by a specific user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
const getUserListings = async (req, res) => {
  try {
    const allListings = await Listing.find({userId: req.params.userId}).lean();
    return res.json(allListings);
  } catch (err) {
    return res
      .status(500)
      .json({ message: `error in fetching my listings: ${err}` });
  }
};

/**
 * Retrieves the favorited listings for a particular user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
const getFavoritedListings = async (req, res) => {
  try {
    const favoritedListings = await ListingViewLog.find({ userId: req.params.userId }).lean();
    const data = []
    for (let listing of favoritedListings) {
      let item = await Listing.findOne({ _id: listing.listingId })
      if (item)
        data.push(item)
    }
    return res.json(data);
  } catch (err) {
    return res
      .status(500)
      .json({ message: `error in fetching viewed listings: ${err}` });
  }
};

/**
 * Retrieves the rental history for a particular user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
const getRentalHistory = async (req, res) => {
  try {
    const rentedListings = await ActiveLeases.find({renterId: req.params.userId}).lean();
    return res.json(rentedListings);
  } catch (err) {
    return res
      .status(500)
      .json({ message: `error in fetching rented listings: ${err}` });
  }
};

/**
 * Logs a favorite action for a listing.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
const logListingFavorite = async (req, res) => {
  try {
    let favoriteLog = new ListingViewLog({
      listingId: req.body.listingId,
      userId: req.body.userId,
      viewedData: new Date(),
    })
    await favoriteLog.save()
    return res.status(200).json({ message: "success" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `error in fetching rented listings: ${err}` });
  }
};

/**
 * Deletes a listing.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
const deleteListing = async (req, res) => {
  try {
    await Listing.deleteOne({_id: mongoose.Types.ObjectId(req.body.listing_id)})
    return res.status(200).json({ message: "success" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `error in fetching rented listings: ${err}` });
  }
};

/**
 * Edits a listing.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
const editListing = async (req, res) => {
  try {
    await Listing.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.body.listing_id) }, {
      address: req.body.address,
      rent: req.body.rent,
      availSpots: req.body.availSpots,
      listingType: req.body.accomodationType,
      listingPictures: req.body.images,
      phoneNumber: req.body.phoneNumber,
      amenities: req.body.amenities,
      bio: req.body.bio,
      description: req.body.generatedDescription ? req.body.generatedDescription : req.body.userDescription,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    })
    return res.status(200).json({ message: "success" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `error in fetching rented listings: ${err}` });
  }
};

module.exports = { getAllListings, createListing, getUserListings, getFavoritedListings, getRentalHistory, logListingFavorite, acceptListing, deleteListing, editListing };