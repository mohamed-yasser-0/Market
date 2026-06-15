
const express = require("express")

const dns = require('dns');
dns.setServers(["1.1.1.1", "1.0.0.1", "8.8.8.8"]);

const main = require("./controllers/shop.controller")
const router = require("./routes/route")
const app = express()
const port = 5000
app.use(express.json());
const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://myas:*123*@market.ibxar6z.mongodb.net/?appName=market")
    .then(() => console.log("Connected To MongoDB ✅"))
    .catch((err) => console.log(err));



app.use("/", router)

app.listen(port, () => {
    console.log("alhamd lla")
})


