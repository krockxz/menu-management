const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Create an item
router.post('/', async (req, res) => {
    try {
        const category = await Category.findById(req.body.categoryId);
        if (!category) {
            return res.status(400).json({ msg: 'Category not found' });
        }

        if (req.body.subCategoryId) {
            const subCategory = await SubCategory.findById(req.body.subCategoryId);
            if (!subCategory) {
                return res.status(400).json({ msg: 'SubCategory not found' });
            }
        }

        const newItem = new Item(req.body);
        await newItem.save();
        res.json(newItem);
    } catch (err) {
        console.error('Error creating item:', err.message);
        res.status(500).send('Server Error');
    }
});

// Get all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        console.error('Error fetching items:', err.message);
        res.status(500).send('Server Error');
    }
});

// Get all items under a specific category
router.get('/category/:categoryId', async (req, res) => {
    try {
        const items = await Item.find({ categoryId: req.params.categoryId });
        res.json(items);
    } catch (err) {
        console.error('Error fetching items under category:', err.message);
        res.status(500).send('Server Error');
    }
});

// Get all items under a specific sub-category
router.get('/subcategory/:subCategoryId', async (req, res) => {
    try {
        const items = await Item.find({ subCategoryId: req.params.subCategoryId });
        res.json(items);
    } catch (err) {
        console.error('Error fetching items under sub-category:', err.message);
        res.status(500).send('Server Error');
    }
});

// Search items by name
router.get('/search', async (req, res) => {
    try {
        const items = await Item.find({ name: new RegExp(req.query.name, 'i') });
        res.json(items);
    } catch (err) {
        console.error('Error searching items:', err.message);
        res.status(500).send('Server Error');
    }
});

// Get item by ID
router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        res.json(item);
    } catch (err) {
        console.error('Error fetching item:', err.message);
        res.status(500).send('Server Error');
    }
});

// Update an item
router.put('/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(item);
    } catch (err) {
        console.error('Error updating item:', err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
