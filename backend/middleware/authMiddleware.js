const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split("")[1];

    if (!token) return res.status(401).json({ error: "Access Denied"});

    jwt.verify(token,"This_is_my_secret_key", (err, user) => {
        if (err) return res.status(403).json({ error: "Invalid Token"});

        req.user = user;
        next();
    });
};

module.exports = authMiddleware;