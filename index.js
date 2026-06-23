
const express = require("express")
const cors = require("cors");

const dns = require('dns');
dns.setServers(["1.1.1.1", "1.0.0.1", "8.8.8.8"]);

require("dotenv").config();
const main = require("./controllers/shop.controller")
const router = require("./routes/route")
const likesrouter = require("./routes/likes.route")
const app = express()
app.use(express.json());
const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");
const { clerkMiddleware } = require("@clerk/express");
app.use(clerkMiddleware({
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    secretKey: process.env.CLERK_SECRET_KEY,
}));
mongoose.connect(process.env.URL)
    .then(() => console.log("Connected To MongoDB ✅"))
    .catch((err) => console.log(err));

app.use(cors());


app.use("/api/prodects", router)
app.use("/api/likes", likesrouter)

app.listen(process.env.PORT, () => {
    console.log("alhamd lla")
})
