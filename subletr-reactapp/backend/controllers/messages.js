const Customer = require("../models/Customer");

const getMessage = async (req, res) => {
    try {
      console.log("entered get all messages");
      //const allListings = await Listing.find().lean();
      //return res.json(allListings);
    } catch (err) {
      return res
        .status(500)
        .json({ message: `error in fetching all messages: ${err}` });
    }
  };
  
  const sendMessage = async (req, res) => {
    try {
      console.log("entered send message", req.body);
      //let newListing = new Listing({ ...req.body });
      //await newListing.save();
      //return res.json({ message: "success" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: `error in sending message: ${err}` });
    }
  };
  
  module.exports = { getMessage, sendMessage };