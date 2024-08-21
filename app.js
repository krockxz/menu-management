require('dotenv').config(); 
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());

// Define Routes
app.use('/api/categories', require('./routes/category'));
app.use('/api/subcategories', require('./routes/subCategory'));
app.use('/api/items', require('./routes/item'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
