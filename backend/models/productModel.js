const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productType: {
    type: String,
    enum: ["fruit", "vegetable", "special"],
    required: [true, "A product must have type"],
  },
  name: {
    type: String,
    required: [true, "A product must have a name"],
  },
  color: {
    type: String,
    required: [true, "A product must get color"],
  },
  image: {
    // data: Buffer,
    type: String,
  },
  quantity: {
    type: Number,
    required: [true, "A product must have a quantity"],
  },
  quantityType: {
    type: String,
    enum: ["kg", "unit", "package"],
    required: [true, "A product must have quantity type"],
  },
  madeIn: {
    type: String,
    enum: ["Israel", "abroad"],
    default: "Israel",
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
  },
  description: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
