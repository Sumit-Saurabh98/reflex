import express from "express";
import { getProfile, login, logout, refreshAccessToken, signup } from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/authenticate.js";


const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', authenticate, logout);
router.post("/refresh-token",authenticate, refreshAccessToken);
router.get("/profile", authenticate, getProfile);

export default router;