
---

# Menu Management API

This is a Node.js backend server for managing a menu system. The menu is divided into categories, subcategories, and items. This API allows you to create, read, update, and search through categories, subcategories, and items.

## Table of Contents

- [Project Setup](#project-setup)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Create Category](#create-category)
  - [Get Categories](#get-categories)
  - [Edit Category](#edit-category)
  - [Create Subcategory](#create-subcategory)
  - [Get Subcategories](#get-subcategories)
  - [Edit Subcategory](#edit-subcategory)
  - [Create Item](#create-item)
  - [Get Items](#get-items)
  - [Edit Item](#edit-item)
  - [Search Item by Name](#search-item-by-name)

## Project Setup

### Prerequisites

- Node.js installed
- MongoDB instance (local or cloud)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/krockxz/menu-management.git
   cd menu-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory and configure it with the following variables:

```bash
MONGO_URI=mongodb+srv://kunal:CwLZ2AMa8OPWkD4n@menudb.oljtc.mongodb.net/menuDB?retryWrites=true&w=majority
PORT=5000
```


## Running the Application

1. Start the server:
   ```bash
   node app.js
   ```

   The server should start and listen on the port specified in the `.env` file (default is `5000`).

2. You can now use Postman, cURL, or any HTTP client to interact with the API.

## API Endpoints

### Create Category

```bash
curl -X POST http://localhost:5000/api/categories \
-H "Content-Type: application/json" \
-d '{
    "name": "Electronics",
    "image": "http://example.com/electronics.png",
    "description": "All kinds of electronic items",
    "taxApplicable": true,
    "tax": 15,
    "taxType": "Percentage"
}'
```

### Get Categories

```bash
curl -X GET http://localhost:5000/api/categories
```

### Edit Category

```bash
curl -X PUT http://localhost:5000/api/categories/<id> \
-H "Content-Type: application/json" \
-d '{
    "name": "Updated Electronics",
    "image": "http://example.com/new-electronics.png",
    "description": "Updated description",
    "taxApplicable": true,
    "tax": 20,
    "taxType": "Flat"
}'
```

### Create Subcategory

```bash
curl -X POST http://localhost:5000/api/subcategories \
-H "Content-Type: application/json" \
-d '{
    "categoryId": "<categoryId>",
    "name": "Smartphones",
    "image": "http://example.com/smartphones.png",
    "description": "Latest smartphones",
    "taxApplicable": true,
    "tax": 18
}'
```

### Get Subcategories

```bash
curl -X GET http://localhost:5000/api/subcategories
```

### Get Subcategories under a Category

```bash
curl -X GET http://localhost:5000/api/subcategories/category/<categoryId>
```

### Edit Subcategory

```bash
curl -X PUT http://localhost:5000/api/subcategories/<id> \
-H "Content-Type: application/json" \
-d '{
    "name": "Updated Smartphones",
    "image": "http://example.com/new-smartphones.png",
    "description": "Updated smartphone description",
    "taxApplicable": true,
    "tax": 18
}'
```

### Create Item

```bash
curl -X POST http://localhost:5000/api/items \
-H "Content-Type: application/json" \
-d '{
    "categoryId": "<categoryId>",
    "subCategoryId": "<subCategoryId>",
    "name": "iPhone 13",
    "image": "http://example.com/iphone13.png",
    "description": "Latest iPhone model",
    "taxApplicable": true,
    "tax": 18,
    "baseAmount": 999,
    "discount": 50,
    "totalAmount": 949
}'
```

### Get Items

```bash
curl -X GET http://localhost:5000/api/items
```

### Get Items under a Category

```bash
curl -X GET http://localhost:5000/api/items/category/<categoryId>
```

### Get Items under a Subcategory

```bash
curl -X GET http://localhost:5000/api/items/subcategory/<subCategoryId>
```

### Edit Item

```bash
curl -X PUT http://localhost:5000/api/items/<id> \
-H "Content-Type: application/json" \
-d '{
    "name": "iPhone 14",
    "image": "http://example.com/iphone14.png",
    "description": "Latest iPhone 14 model",
    "taxApplicable": true,
    "tax": 18,
    "baseAmount": 1099,
    "discount": 100,
    "totalAmount": 999
}'
```

### Search Item by Name

```bash
curl -X GET "http://localhost:5000/api/items/search?name=iPhone%2013"
```

To test the API endpoints using the deployed URL, we can replace http://localhost:5000 with https://menu-management-r4gy.onrender.com in all the cURL commands or requests made via Postman or any other HTTP client.
---
