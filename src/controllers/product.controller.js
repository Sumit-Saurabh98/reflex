import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    console.log("Error in getAllProducts:", error);
    res.status(500).json({ message: "Internal server error: " + error });
  }
};