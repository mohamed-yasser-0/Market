const express = require("express");
const { toggleLike } = require("../controllers/likes.controller");


const likesrouter = express.Router()
likesrouter.route("/:productId")
    .post(toggleLike)
module.exports = likesrouter;