const express = require('express');
const router = express.Router();
const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');

// Create a sub-category
router.post('/', async (req, res) => {
    try {
        const category = await Category.findById(req.body.categoryId);
        if (!category) {
            return res.status(400).json({ msg: 'Category not found' });
        }

        const taxApplicable = req.body.taxApplicable !== undefined ? req.body.taxApplicable : category.taxApplicable;
        const tax = req.body.tax !== undefined ? req.body.tax : category.tax;

        const newSubCategory = new SubCategory({
            ...req.body,
            taxApplicable,
            tax
        });

        await newSubCategory.save();
        res.json(newSubCategory);
    } catch (err) {
        console.error('Error creating sub-category:', err.message);
        res.status(500).send('Server Error');
    }
});

// Get all sub-categories
router.get('/', async (req, res) => {
    try {
        const subCategories = await SubCategory.find();
        res.json(subCategories);
    } catch (err) {
        console.error('Error fetching sub-categories:', err.message);
        res.status(500).send('Server Error');
    }
});

// Get all sub-categories under a specific category
router.get('/category/:categoryId', async (req, res) => {
    try {
        const subCategories = await SubCategory.find({ categoryId: req.params.categoryId });
        res.json(subCategories);
    } catch (err) {
        console.error('Error fetching sub-categories under category:', err.message);
        res.status(500).send('Server Error');
    }
});

// Get sub-category by ID
router.get('/:id', async (req, res) => {
    try {
        const subCategory = await SubCategory.findById(req.params.id);
        res.json(subCategory);
    } catch (err) {
        console.error('Error fetching sub-category:', err.message);
        res.status(500).send('Server Error');
    }
});

// Update a sub-category
router.put('/:id', async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(subCategory);
    } catch (err) {
        console.error('Error updating sub-category:', err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
