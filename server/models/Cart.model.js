const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // This should match the name of your user model
    required: true,
  },
  img: {
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    img5: String,
  },
  title: String,
  processor: String,
  windows: String,
  screen: Number,
  force: String,
  storage: String,
  price: Number,
  cprice: Number,
  color: String,
  quantity: Number,
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = { Cart };

