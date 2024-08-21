const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    subCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' },
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String },
    taxApplicable: { type: Boolean, default: false },
    tax: { type: Number, default: 0 },
    baseAmount: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    totalAmount: { type: Number, required: true },
});

module.exports = mongoose.model('Item', ItemSchema);
