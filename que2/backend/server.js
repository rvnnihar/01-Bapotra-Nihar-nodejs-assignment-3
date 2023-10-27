const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Product = require('./models/Product');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/701-ass-3', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("@@@ ===> db connected")
});

app.use(cors());
app.use(bodyParser.json());

app.use((req,res)=>{
    console.log("@@@ ===> url: " + req.url);
})

// Create
app.post('/api/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        console.log("@@@ ===> error: " + error.message )
        res.status(500).json({ error: error.message });
    }
});

// Fetch products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.log("@@@ ===> error: " + error.message )
        res.status(500).json({ error: error.message });
    }
});

// fetch single product
app.get('/api/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        res.status(200).json(product);
    } catch (error) {
        console.log("@@@ ===> error: " + error.message )
        res.status(500).json({ error: error.message });
    }
});

// update product
app.put('/api/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProduct = req.body;
        const product = await Product.findByIdAndUpdate(productId, updatedProduct, { new: true });
        res.status(200).json(product);
    } catch (error) {
        console.log("@@@ ===> error: " + error.message )
        res.status(500).json({ error: error.message });
    }
});

// Delete product
app.delete('/api/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        await Product.findByIdAndDelete(productId);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.log("@@@ ===> error: " + error.message )
        res.status(500).json({ error: error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
