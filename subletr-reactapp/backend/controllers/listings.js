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

module.exports = { getAllListings };
