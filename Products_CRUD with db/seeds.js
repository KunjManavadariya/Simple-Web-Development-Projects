const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose.connect('mongodb://localhost:27017/Products', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB successfully connected");
    })
    .catch(e => {
        console.log("Error!!!");
        console.log(e);
    })

Product.insertMany([{
        name: 'Boat Airdopes 441',
        price: 2500,
        category: 'Electronics',
        seller: 'Amazon',
        inStock: true
    }, {
        name: 'All-in-one Makeup Kit',
        price: 6000,
        category: 'Beauty',
        seller: 'Meesho',
        inStock: true
    }, {
        name: 'Puma T-shirt for men',
        price: 1100,
        category: 'Clothing',
        seller: 'Flipkart',
        inStock: true
    }, {
        name: 'Sketchers casual shoes for men',
        price: 3999,
        category: 'Footwear',
        seller: 'Sketchers',
        inStock: true
    }, {
        name: 'Adidas Yezzy',
        price: 1990,
        category: 'Footwear',
        seller: 'Amazon'
    }, {
        name: 'Lenovo Legion Y540 Laptop',
        price: 55000,
        category: 'Electronics',
        seller: 'Lenovo',
        inStock: true
    }])
    .then((data) => {
        console.log(data);
    })
    .catch(e => {
        console.log(e);
    })