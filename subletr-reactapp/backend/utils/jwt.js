const jwt = require("jsonwebtoken");
const config = require("../config/variables");

/**
 * Generates a JWT token.
 * @param {Object} options - The options for generating the token.
 * @param {string} options.id - The ID for the token.
 * @param {string} options.errorMessage - The error message to throw in case of an error.
 * @param {string} options.secret - The secret key to sign the token.
 * @returns {string} The generated token.
 * @throws {Error} If an error occurs during token generation.
 */
const generateToken = ({ id, errorMessage, secret }) => {
  try {
    const token = jwt.sign({ id }, secret, {
      expiresIn: `${config.SESSION_DURATION * 60 * 1000}`,
    });
    return token;
  } catch (err) {
    throw errorMessage || err;
  }
};

/**
 * Verifies a JWT token.
 * @param {Object} options - The options for verifying the token.
 * @param {string} options.token - The token to verify.
 * @param {string} options.errorMessage - The error message to throw in case of an error.
 * @param {string} options.secret - The secret key to verify the token.
 * @returns {string} The ID extracted from the token.
 */
const verifyToken = ({ token, errorMessage, secret }) => {
  try {
    const jwToken = jwt.verify(token, secret);
    return jwToken.id;
  } catch (err) {
    // throw errorMessage || err;
    console.log(`Error in verifying token: ${err}`);
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
