const express = require("express");
const router = express.Router();
const Resource = require("../models/resource");
const { authMiddleware, adminMiddleware } = require("../middleware/authmiddleware");

// ✅ GET ALL RESOURCES (admin-only)
router.get("/", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const resources = await Resource.find().populate("user", "name email");
    res.status(200).json(resources);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ DELETE ANY RESOURCE (admin-only)
router.delete("/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ message: "Resource not found" });

    await resource.deleteOne();
    res.status(200).json({ message: "Resource deleted successfully by admin" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ UPDATE ANY RESOURCE (admin-only)
router.put("/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ message: "Resource not found" });

    const { type, description, location, contact } = req.body;
    resource.type = type || resource.type;
    resource.description = description || resource.description;
    resource.location = location || resource.location;
    resource.contact = contact || resource.contact;

    const updated = await resource.save();
    res.status(200).json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
