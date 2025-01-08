import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  images: {
    type: [String],
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  specifications: {
    processor: {
      type: String,
      required: true,
      trim: true
    },
    windows: {
      type: String,
      required: true,
      trim: true
    },
    screen: {
      type: Number,
      required: true
    },
    force: {
      type: String,
      required: true,
      trim: true
    },
    storage: {
      type: String,
      required: true,
      trim: true
    }
  },
  discountedPrice: {
    type: Number,
    required: true,
    min: 0
  },
  mrp: {
    type: Number,
    required: true,
    min: 0
  },
  color: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true
});

const Product = mongoose.model("Product", productSchema);

export default Product;