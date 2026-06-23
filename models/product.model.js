const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        userId: {
            type: Number,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        time: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);
const Prodect = mongoose.model('Prodect', productSchema)

module.exports = Prodect
