const express = require("express");
const { main, posts, single, del, add } = require("../controllers/shop.controller");
const logss = require("../middleware/asyncWrapper");
const isAuth = require("../middleware/isAuth");


const router = express.Router()
router.route("/")
    .get(isAuth, main)
    .post(isAuth,posts)
router.route("/:userId")
    .get(isAuth,single)
router.route("/:userId/:ProdectID")
    .delete(isAuth,del)
    .patch(isAuth,add)
module.exports = router;