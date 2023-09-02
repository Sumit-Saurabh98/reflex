const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  img: {
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    img5: String,
  },
  title: String,
  specifications: {
    processor: String,
    windows: String,
    screen: Number,
    force: String,
    storage: String,
  },
     price: Number,
    cprice: Number,
    color: String,
    quantity: Number,
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
