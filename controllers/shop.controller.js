
const log = require("../middleware/asyncWrapper");
const Prodect = require("../models/product.model")

const main = async (req, res, next) => {
    const products = await Prodect.find();
    res.send(products)
}
const single = async (req, res) => {
    const id = req.params.userId
    const products = await Prodect.find({ userId: id });
    res.send(products)
}
const posts = async (req, res) => {
    const newProduct = new Prodect(req.body)
    await newProduct.save()
    res.send(newProduct)
}
const del = async (req, res) => {
    const id = req.params.userId
    const productID = req.params.ProdectID

    const del = await Prodect.findById(productID)
    if (!del) {
        res.send("product not found")
    }
    if (del.userId.toString() === id.toString()) {
        await del.deleteOne();
    } else (
        res.send("not" + " " + productID)
    )
    res.send("done" + " " + productID)
}
const add = async (req, res) => {
    const id = req.params.userId;
    const productID = req.params.ProdectID;

    const product = await Prodect.findById(productID);

    if (!product) {
        return res.status(404).send("Product not found");
    }

    if (product.userId.toString() !== id.toString()) {
        return res.status(403).send("Not allowed");
    }

    product.set(req.body);

    await product.save();

    res.send(product);
};
module.exports = { main, posts, single, del, add };