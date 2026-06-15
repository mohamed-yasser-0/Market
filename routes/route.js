const express = require("express");
const {main,posts, single, del, add} = require("../controllers/shop.controller");


const router = express.Router()
router.route("/")
    .get(main)
    .post(posts)
router.route("/:userId")
    .get(single)
router.route("/:userId/:ProdectID")
    .delete(del)
    .patch(add)


module.exports = router;