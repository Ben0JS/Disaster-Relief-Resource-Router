const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load auth middleware (for use inside routes)
const { authMiddleware, adminMiddleware } = require("./middleware/authmiddleware");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/resources", require("./routes/resourceRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
// Admin routes: apply middleware INSIDE the router, not here
app.use("/api/admin/resources", require("./routes/adminResourceRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
