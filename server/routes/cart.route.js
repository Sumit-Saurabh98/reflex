const express = require('express');
const { Cart } = require("../models/Cart.model");
const router = express.Router();

// POST route to add a product to the cart
router.post("/add", async (req, res) => {
    try {
        const { userId, img, title, processor, windows, screen, force, storage, price, cprice, color, quantity } = req.body;

        // Create a new cart item and associate it with the user
        
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
        const userCart = await Cart.find({ user: userId }).exec();

        res.status(200).json(userCart);
    } catch (error) {
        console.error("Error fetching user's cart:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// PUT route to update the quantity of a product in the cart
router.put("/update/:cartItemId", async (req, res) => {
    try {
        const cartItemId = req.params.cartItemId; // Get the cart item ID from the URL parameter
        const { quantity } = req.body; // Get the updated quantity from the request body

        // Find the cart item by ID and update the quantity
        const updatedCartItem = await Cart.findByIdAndUpdate(
            cartItemId,
            { $set: { quantity } },
            { new: true }
        ).exec();

        if (!updatedCartItem) {
            return res.status(404).json({ error: "Cart item not found" });
        }

        res.status(200).json(updatedCartItem);
    } catch (error) {
        console.error("Error updating cart item quantity:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// DELETE route to remove a product from the cart
router.delete("/remove/:cartItemId", async (req, res) => {
    try {
        const cartItemId = req.params.cartItemId; // Get the cart item ID from the URL parameter

        // Find and delete the cart item by ID
        const deletedCartItem = await Cart.findByIdAndRemove(cartItemId).exec();

        if (!deletedCartItem) {
            return res.status(404).json({ error: "Cart item not found" });
        }

        res.status(200).json({ message: "Cart item removed successfully" });
    } catch (error) {
        console.error("Error removing cart item:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



module.exports = router;
