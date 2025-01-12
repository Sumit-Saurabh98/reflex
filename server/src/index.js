
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import productRoutes from "./routes/product.route.js"
import cartRoutes from "./routes/cart.route.js"
import couponRoutes from "./routes/coupon.route.js"
import connectDB from "./config/db.js";


const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.get("/test", (req, res) => {
    res.send("Server is working....")
})

app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/coupon', couponRoutes);

app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`Listening on port ${PORT}`);
    } catch (error) {
        console.log("Error connecting to database:", error);
    }
});
