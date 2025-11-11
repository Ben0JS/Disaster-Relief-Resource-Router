const express = require("express");
const { getAllResources } = require("../controllers/adminController");
const { verifyAdmin } = require("../middleware/authmiddleware");

const router = express.Router();

router.get("/resources", verifyAdmin, getAllResources);

module.exports = router;
