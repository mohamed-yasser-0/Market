const Liks = require("../models/likes.model");
const { getAuth } = require("@clerk/express");

const toggleLike = async (req, res) => {
    const productId = req.params.productId;
    const { userId } = getAuth(req);

    const existingLike = await Liks.findOne({
        userId,
        productId,
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
        productId,
    });

    return res.json({
        message: "Liked",
        liked: true,
    });
}
const getLikes = async (req, res) => {
    const productId = req.params.productId;

    const existingLike = await Liks.find({
        productId,
    });
    return res.json({
        existingLike: existingLike
    });
}

module.exports = { toggleLike, getLikes };