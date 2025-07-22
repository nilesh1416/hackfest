// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to request
    next(); // Pass control to the next middleware or route
  } catch (err) {
    return res.status(403).json({ msg: "Token is not valid" });
  }
};

// Example for admin-only middleware
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ msg: "Access denied. Admins only." });
  }
};

module.exports = { verifyToken, isAdmin };
