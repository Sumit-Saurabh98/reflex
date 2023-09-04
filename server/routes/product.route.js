const express = require('express');
const { Product } = require("../models/Product.model");

const router = express.Router();

// Define a route that accepts query parameters for filtering and sorting
router.get("/products/:id?", async (req, res) => {
    try {
        const { id } = req.params; // Retrieve the ID parameter from the URL
        const { screen, sort, color } = req.query; // Retrieve query parameters

        if (id) {
            // If an ID is provided in the URL, retrieve a single product by ID
            const product = await Product.findById(id);
            if (!product) {
                return res.status(404).json({ error: "Product not found" });
            }
            return res.status(200).json({ data: product, success: true });
        }

        // If no ID is provided, proceed with filtering and sorting

        // Create a filter object based on the query parameters
        const filterObj = {};

        // Add filter conditions based on your requirements
        if (screen === "13" || screen === "14" || screen === "15" || screen === "16" || screen === "17") {
            filterObj.screen = screen;
        }
        // Add other filter conditions for price, screen type, and refresh rate as needed.

        // Add color filtering condition
        if (color) {
            filterObj.color = color;
        }

        // Create a sort object based on the query parameters
        const sortObj = {};

        // Add sorting criteria based on your requirements
        if (sort === "asc") {
            sortObj.price = 1; // Sort in ascending order by price
        } else if (sort === "desc") {
            sortObj.price = -1; // Sort in descending order by price
        }
        // Add other sorting criteria as needed.

        // Perform the database query with filtering and sorting
        const products = await Product.find(filterObj)
            .sort(sortObj);

        // Return the filtered and sorted products as a JSON response
        res.status(200).json({ data: products, success: true });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
