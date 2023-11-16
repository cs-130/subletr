const express = require("express");
const passport = require("passport");
const router = express.Router();

const AuthController = require("../controllers/auth");
const { ensureAuth } = require("../middlewares/auth");

// Google OAuth
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

router.get("/google/callback", (req, res) => {
  passport.authenticate(
    "google",
    {
      session: false,
      failWithError: true,
      failureRedirect: "/auth/google/failure",
    },
    async (err, customer) => {
      return AuthController.handleAuthentication(req, res, customer);
    }
  )(req, res);
});

router.get("/logout", (req, res) => {
  req.logout();
  res
    .clearCookie("jwt_auth", {
      domain: process.env.NODE_ENV === "production" ? `fribe.com` : null,
    })
    .json({ message: "success" });
});

// Update any field for customer
router.put("/update-customer", ensureAuth, AuthController.updateCustomer);

router.get("/is-customer-logged-in", AuthController.isCustomerLoggedIn);

module.exports = router;
