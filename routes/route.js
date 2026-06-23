const express = require("express");
const {main,posts, single, del, add} = require("../controllers/shop.controller");
const logss = require("../middleware/asyncWrapper");


const router = express.Router()
router.route("/")
    .get(logss,main)
    .post(posts)
router.route("/:userId")
    .get(single)
router.route("/:userId/:ProdectID")
    .delete(del)
    .patch(add)


module.exports = router;