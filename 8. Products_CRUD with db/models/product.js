const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['Electronics', 'Clothing', 'Footwear', 'Beauty'],
        required: true
    },
    seller: {
        type: String,
        required: true,
    },
    inStock: {
        type: Boolean,
        default: false
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;