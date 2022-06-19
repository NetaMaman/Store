const Product = require("./../models/productModel");

//get the collection of all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "sucsses",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
//get the collection of all fruits
exports.getAllFruits = async (req, res) => {
  try {
    const fruits = await Product.find({ productType: "fruit" }).exec();
    res.status(200).json({
      status: "sucsses",
      results: fruits.length,
      data: {
        fruits,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//get the collection of all veggies
exports.getAllVeggies = async (req, res) => {
  try {
    const veggies = await Product.find({ productType: "vegetable" }).exec();
    res.status(200).json({
      status: "sucsses",
      results: veggies.length,
      data: {
        veggies,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//get 1 product from the products collction
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        user: newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err,
    });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err,
    });
  }
};