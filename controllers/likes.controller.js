const Liks = require("../models/likes.model");
const { getAuth } = require("@clerk/express");

const toggleLike = async (req, res) => {
    const ProductID = req.params.ProductID;
    const { userId } = getAuth(req);

    const existingLike = await Liks.findOne({
        userId,
        ProductID,
    });
    if (existingLike) {
        await Liks.deleteOne({ _id: existingLike._id });

        return res.json({
            message: "Unliked",
            liked: false,
        });
    }
    await Liks.create({
        userId,
        ProductID,
    });

    return res.json({
        message: "Liked",
        liked: true,
    });
}

module.exports = { toggleLike };