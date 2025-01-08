import express from "express";
import { getAllProducts } from "../controllers/product.controller.js";


const router = express.Router();

router.get('/all-products', getAllProducts);

export default router;