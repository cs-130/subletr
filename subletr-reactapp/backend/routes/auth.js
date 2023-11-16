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
    async (err, user) => {
      return AuthController.handleAuthentication(req, res, user);
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

// Update any field for user
router.put("/update-user", ensureAuth, AuthController.updateUser);

router.get("/is-user-logged-in", AuthController.isUserLoggedIn);

module.exports = router;
