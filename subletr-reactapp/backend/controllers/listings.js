const Customer = require("../models/Customer");
const Listing = require("../models/Listing");
import { sendAwsEmail } from "../utils/notifications";

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
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  acceptListing,
  getAllListings,
  createListing,
};
