const express = require("express");
const { toggleLike } = require("../controllers/likes.controller");


const likesrouter = express.Router()
likesrouter.route("/:ProdectID")
    .post(toggleLike)
module.exports = likesrouter;