const express = require("express");
const router = express.Router();
const Resource = require("../models/resource");
const { authMiddleware, adminMiddleware } = require("../middleware/authmiddleware");

// ✅ ADD NEW RESOURCE (Protected)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { type, description, location, contact } = req.body;
    const newResource = new Resource({
      type,
      description,
      location,
      contact,
      user: req.user.id,
    });

    const savedResource = await newResource.save();
    res.status(201).json(savedResource);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ GET ALL RESOURCES (with optional filters)
router.get("/", async (req, res) => {
  try {
    const { location, type } = req.query;
    const filter = {};

    if (location) filter.location = { $regex: location, $options: "i" };
    if (type) filter.type = { $regex: type, $options: "i" };

    const resources = await Resource.find(filter).populate("user", "name email");
    res.status(200).json(resources);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ UPDATE RESOURCE (Protected, owner or admin only)
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ message: "Resource not found" });

    // Only owner or admin can update
    if (resource.user.toString() !== req.user.id && !req.user.isAdmin) {
      return res.status(403).json({ message: "Not authorized" });
    }

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

// ✅ DELETE RESOURCE (Protected, owner only)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ message: "Resource not found" });

    // Only owner can delete
    if (resource.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized action" });
    }

    await resource.deleteOne();
    res.status(200).json({ message: "Resource deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
