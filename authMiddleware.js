const jwt = require('jsonwebtoken');
const SECRET_KEY = "yourSecretKey"; // Later, store this in `.env`

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: "Forbidden: Invalid token" });
    }
};

module.exports = verifyToken;
