const express = require('express'); 
const router = express.Router();
const Product = require('../models/products.model');

router.get('/products', async (req, res) => {
    try {
        const productList = await Product.find({}).lean();
        res.json({ status: 'ok', productList});
    } catch (error) {
        res.json({ status: 'error', error: 'product exist'});
    }
})

router.get('/product/bestStockProduct', async (req, res) => {
    try {
        const list = await Product.find({}).sort({stock: -1}).lean();
        const product = list[0].name;
        res.json({ status: 'ok', product});
    } catch (error) {
        res.json({ status: 'error', error: 'product does not exist'});
    }
})

router.get('/product/bestSellingProduct', async (req, res) => {
    try {
        const list = await Product.find({}).sort({sales: -1}).lean();
        const product = list[0].name;
        res.json({ status: 'ok', product});
    } catch (error) {
        res.json({ status: 'error', error: 'product does not exist'});
    }
})

router.get('/buy/:id/:amount', async (req, res) => {
    try {
        const {id, amount} = req.params;
        const product = await Product.findById({_id: id}).lean();
        if (product.stock < amount) {
            res.json({ status: 'error', error: 'Error: insufficient stock'});
        } else {
            const currentStock = product.stock - parseInt(amount);
            const currentSales = product.sales + parseInt(amount);
            await Product.findByIdAndUpdate({_id: id}, {stock:currentStock, sales: currentSales});
            res.json({ status: 'ok', message: ` Product ${product.name} with id ${product._id}, ${amount} units sold, current ${currentStock} stock`});
        }
    } catch (error) {
        res.json({ status: 'error', error});
    }
})

router.get('/product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById({_id: id}).lean();
        res.json({ status: 'ok', product});
    } catch (error) {
        res.json({ status: 'error', error: 'product does not exist'});
    }
})

router.post('/product', async (req, res) => {
    try {
        const {name, reference, price, category, stock} = req.body;
        const product = new Product({name, reference, price, category, stock, createAt: new Date(), sales: 0});
        await product.save();
        res.json({ status: 'ok'});
    } catch (error) {
        res.json({ status: 'error', error});
    }
})

router.delete('/product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        await Product.findByIdAndDelete({_id: id});
        res.json({ status: 'ok'});
    } catch (error) {
        res.json({ status: 'error', error});
    }
})

router.put('/product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {name, reference, price, category, stock} = req.body;
        const response = await Product.findByIdAndUpdate({_id: id}, {name, reference, price, category, stock});
        res.json({ status: 'ok'});
    } catch (error) {
        const {id} = req.params;
        res.json({ status: 'error', error: `product ${id} does not exist`});
    }
})


module.exports = router;