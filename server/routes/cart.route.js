const express = require('express');
const { Cart } = require("../models/Cart.model");
const router = express.Router();

// POST route to add a product to the cart
router.post("/add", async (req, res) => {
    try {
        const { userId, img, title, processor, windows, screen, force, storage, price, cprice, color, quantity } = req.body;

        // Create a new cart item and associate it with the user
        console.log(userId, title)
        const cartItem = new Cart({
            user: userId,
            img: {
                img1: img.img1,
                img2: img.img2,
                img3: img.img3,
                img4: img.img4,
                img5: img.img5,
            },
            title,
            processor,
            windows,
            screen,
            force,
            storage,
            price,
            cprice,
            color,
            quantity,
        });

        // Save the cart item to the database
        await cartItem.save();

        res.status(201).json(cartItem);
    } catch (error) {
        console.error("Error adding product to cart:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// GET route to retrieve a user's cart
router.get("/get/:userId", async (req, res) => {
    try {
        const userId = req.params.userId; // Get the user ID from the URL parameter

        // Find all cart items associated with the user
        const userCart = await Cart.find({ user: userId }).populate("user").exec();

        res.status(200).json(userCart);
    } catch (error) {
        console.error("Error fetching user's cart:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
