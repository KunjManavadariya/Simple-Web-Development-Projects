const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const Product = require("./models/product");
const methodOverride = require('method-override');

const categories = ['Electronics', 'Clothing', 'Footwear', 'Beauty'];

mongoose.connect('mongodb://localhost:27017/Products', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB successfully connected");
    })
    .catch(e => {
        console.log("Error!!!");
        console.log(e);
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.listen(1812, () => {
    console.log("Listening on port 1812!!...");
})

app.get('/products', async(req, res) => {
    const { category } = req.query;
    if (category) {
        const Products = await Product.find({ category });
        res.render('products/index', { Products, category, back: 'yes' })
    } else {
        const Products = await Product.find({});
        res.render('products/index', { Products, category: 'All', back: '' })
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/new')
})

app.get('/products/:id', async(req, res) => {
    const { id } = req.params;
    const foundProduct = await Product.findById(id)
    res.render('products/show', { foundProduct })
})

app.get('/products/:id/edit', async(req, res) => {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);
    res.render('products/edit', { foundProduct, categories });
})

app.post('/products', async(req, res) => {
    const addProduct = new Product(req.body);
    await addProduct.save();
    res.redirect(`/products/${addProduct._id}`);
})

app.put('/products/:id', async(req, res) => {
    const { id } = req.params;
    await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/products/${id}`);
})

app.delete('/products/:id', async(req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})