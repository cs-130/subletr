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
  // req.logout();
  res.cookie("jwt_auth", "", { expires: new Date(0) });
  return res.json({ message: "success" });
});

// Update any field for customer
router.put("/update-customer", ensureAuth, AuthController.updateCustomer);

router.get("/is-customer-logged-in", AuthController.isCustomerLoggedIn);

router.get("/get-customer", ensureAuth, (req, res) => {
  return res.json(req.customer);
});

module.exports = router;
