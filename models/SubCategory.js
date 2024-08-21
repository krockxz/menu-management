const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    taxApplicable: { type: Boolean, default: false },
    tax: { type: Number, default: 0 },
});

module.exports = mongoose.model('SubCategory', SubCategorySchema);
