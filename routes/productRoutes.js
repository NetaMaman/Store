const express = require("express");
const productController = require("./../controllers/productController");

const router = express.Router();

router.route("/").get(productController.getAllProducts);

router.route("/").post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
