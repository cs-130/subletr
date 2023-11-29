const express = require("express");
const router = express.Router();

const { ensureAuth } = require("../middlewares/auth");

router.get("/get-all-listings", ensureAuth);

router.post("/create-listing", ensureAuth);

module.exports = router;
