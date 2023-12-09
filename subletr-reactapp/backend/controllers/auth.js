const { generateToken, verifyToken } = require("../utils/jwt");
const config = require("../config/variables");
const Customer = require("../models/Customer");

/**
 * Handles the authentication process for the customer.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Object} customer - The customer object.
 * @returns {Object} The response object.
 */
const handleAuthentication = async (req, res, customer) => {
  try {
    console.log("handle auth: ", customer);
    // Generate our own token from our google customer
    const token = generateToken({
      id: customer._id.toHexString(),
      secret: config.JWT_SECRET,
      errorMessage: null,
    });
    // Send credential cookies
    // console.log("Inside handleAut: config.CLIENT_URL is", config.CLIENT_URL);
    return res
      .cookie("jwt_auth", token, {
        // maxAge: config.SESSION_DURATION * 60 * 1000,
        httpOnly: true,
        // sameSite: "strict",
        // secure: process.env.NODE_ENV === "production",
        path: "/",
        domain: process.env.NODE_ENV === "production" ? `subletr.com` : null,
        // crossDomain: true,
      })
      .redirect(`${config.CLIENT_URL}/`);
  } catch (err) {
    console.error(err.message);
    throw new Error(err);
  }
};

/**
 * Updates the customer information.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object.
 */
const updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      { _id: req.customer._id },
      { $set: req.body },
      { new: true }
    );
    console.log({ updatedCustomer });
    return res.status(200).json(updatedCustomer);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// TODO: apply rate limiting
const isCustomerLoggedIn = async (req, res) => {
  const cookie = req.cookies["jwt_auth"];

  // Extract the id from the token saved in the cookies
  const id = verifyToken({
    token: cookie,
    secret: config.JWT_SECRET,
    errorMessage: null,
  });

  // Check if there exists a customer with the given id
  const customer = await Customer.findById(id);
  if (cookie && customer) {
    return res.json({ loggedIn: true, id: customer._id });
  }
  return res.json({ loggedIn: false });
};

module.exports = { handleAuthentication, updateCustomer, isCustomerLoggedIn };
