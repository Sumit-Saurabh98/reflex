const express = require('express');
const { ProductModel } = require("../models/Product.model");

const router = express.Router();

// Define a route that accepts an optional 'id' as a query parameter
router.get("/products/:id?", async (req, res) => {
    try {
        // Retrieve the 'id' from the request parameters (if provided)
        const productId = req.params.id;

        if (productId) {
            // If 'id' is provided, find and return the specific product
            const product = await ProductModel.findById(productId);

            if (!product) {
                // If the product with the given 'id' is not found, return a 404 response
                return res.status(404).json({ error: "Product not found" });
            }

            // Return the specific product as a JSON response
            return res.status(200).json({ data: product, success: true });
        } else {
            // If 'id' is not provided, return all products
            const products = await ProductModel.find();

            // Return all products as a JSON response
            return res.status(200).json({ data: products, success: true });
        }
    } catch (error) {
        console.error("Error fetching product/products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
