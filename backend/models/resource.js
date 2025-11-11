const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
  {
    type: { type: String, required: true }, // e.g., food, shelter
    description: { type: String },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // who added it

    // 🆕 optional coordinates for map integration
    latitude: { type: Number },
    longitude: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resource", resourceSchema);
