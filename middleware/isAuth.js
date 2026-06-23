const { getAuth } = require("@clerk/express");

const isAuth = (req, res, next) => {
    const { userId } = getAuth(req);

    if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    next();
};

module.exports = isAuth;