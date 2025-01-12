import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { addToCart, clearCart, getCartProducts, removeAllFromCart, updateQuantity } from "../controllers/cart.controller.js";

const router = express.Router();

router.get("/", authenticate, getCartProducts);
router.post("/", authenticate, addToCart);
router.delete("/", authenticate, removeAllFromCart);
router.delete("/clear-cart",authenticate, clearCart);
router.put("/:_id", authenticate, updateQuantity);

export default router