const GoogleStrategy = require("passport-google-oauth20").Strategy;
const Customer = require("../models/Customer");

/**
 * Configuration for the Google authentication strategy.
 * @param {Object} passport - The passport instance to use for authentication.
 */
module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.SERVER_ENV == 'production' ? process.env.GOOGLE_PROD_CLIENT_ID : process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.SERVER_ENV == 'production' ? process.env.GOOGLE_PROD_CLIENT_SECRET : process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.SERVER_ENV == 'production' ? "https://subletr-ibif.vercel.app/auth/google/callback" : "http://localhost:500/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {

        const newCustomer = {
          //   googleId: profile.id,
          fullName: profile.name.givenName + " " + profile.name.familyName,
          email: profile.emails[0].value,
          profilePicture: profile.photos[0].value,
          provider: "google",
        };

        try {
          // Find the customer in our database
          let customer = await Customer.findOne({ email: profile.emails[0].value });

          // If customer is found in the database
          if (customer) {
            // If provider of the customer is same as current auth strategy, proceed forth, else ignore it
            if (customer?.provider === "google") {
              done(null, customer);
            } else {
              const errorMessage = `A customer with this mail id already exists with ${customer?.provider}!`;
              console.log({ errorMessage });
              done(errorMessage, customer);
            }
          } else {
            // Create a new customer
            customer = await Customer.create(newCustomer);
            done(null, customer);
          }
        } catch (err) {
          console.error(err);
          done(err, null);
        }
      }
    )
  );
  // used to serialize the customer for the session
  passport.serializeUser((customer, done) => {
    done(null, customer.id);
  });

  // used to deserialize the customer
  passport.deserializeUser((id, done) => {
    Customer.findById(id, (err, customer) => done(err, customer));
  });
};
