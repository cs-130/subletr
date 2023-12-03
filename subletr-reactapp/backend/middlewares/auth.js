const { verifyToken } = require("../utils/jwt");
const config = require("../config/variables");
const Customer = require("../models/Customer");

module.exports = {
  ensureAuth: async function (req, res, next) {
    // Get the cookie for authorization
    // In this case, cookie name is jwt_auth
    const cookie = req.cookies["jwt_auth"];
    console.log('REQ:\n', req, 'done')

    // Extract the id from the token saved in the cookies
    const id = verifyToken({
      token: cookie,
      secret: config.JWT_SECRET,
      errorMessage: null,
    });

    // Check is there exists an user with the given id
    const customer = await Customer.findById(id);
    if (!cookie) {
      return res
        .status(401)
        .json({ error: `Cookie not found. id = ${id}, cookie: ${cookie}` });
    } else if (!customer) {
      return res
        .status(401)
        .json({ error: "Unauthorized customer while ensuring auth." });
    } else {
      if (process.env.NODE_ENV !== "production") {
        console.log("Cookie: ", cookie);
      }
      req.customer = customer;
      return next();
    }
  },
};
