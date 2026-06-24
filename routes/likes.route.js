const express = require("express");
const { toggleLike, getLikes } = require("../controllers/likes.controller");


const likesrouter = express.Router()
likesrouter.route("/:productId")
    .post(toggleLike)
likesrouter.route("/")
    .get(getLikes)
module.exports = likesrouter;