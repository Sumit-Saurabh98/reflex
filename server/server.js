const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();
const userRoutes = require("./routes/user.route")
const productsRouter = require("./routes/product.route")
const cors = require("cors")

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors())

app.use(express.json());

app.use("/user", userRoutes);
app.use("/api", productsRouter)

app.listen(PORT, async () => {
    try {
        await connection();
        console.log("Connected to DB successfully");
    } catch (err) {
        console.log("Error while connecting to DB");
        console.error(err);
    }
    console.log(`Listening on port ${PORT}`);
});
