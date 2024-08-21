const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Create a category
router.post('/', async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.json(newCategory);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get category by ID
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.json(category);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Update a category
router.put('/:id', async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(category);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
