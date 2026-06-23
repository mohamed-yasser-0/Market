const mongoose = require('mongoose')

const liksSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        productId:{
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
    }
);
const Liks = mongoose.model('Like', liksSchema)

module.exports = Liks