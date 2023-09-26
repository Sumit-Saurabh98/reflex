const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();
const userRouter = require("./routes/user.route")
const productsRouter = require("./routes/product.route")
const cors = require("cors")
const cartRouter = require('./routes/cart.route');
const { authenticate } = require("./middlewares/authenticate");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors())

app.use(express.json());

app.use("/user", userRouter);
app.use("/api", productsRouter)
app.use("/cart", authenticate , cartRouter)


app.listen(PORT, async () => {
    try {
        await connection();
        // console.log("Connected to DB successfully");
    } catch (err) {
        // console.log("Error while connecting to DB");
        console.error(err);
    }
    console.log(`Listening on port ${PORT}`);
});
