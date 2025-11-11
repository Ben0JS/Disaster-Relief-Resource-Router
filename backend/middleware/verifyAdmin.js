const jwt = require("jsonwebtoken");
const User = require("../models/user");

const verifyAdmin = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
        const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    const user = await User.findById(decoded.id);
    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Access forbidden: Admins only" });
    }
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = verifyAdmin;
