import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { getCoupon, validateCoupon } from "../controllers/coupon.controller.js";

const router = express.Router();

router.get('/', authenticate, getCoupon);
router.post('/validate', authenticate, validateCoupon);

export default router