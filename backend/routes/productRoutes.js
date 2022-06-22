const express = require("express");
const productController = require("./../controllers/productController");

const router = express.Router();

router.route("/").get(productController.getAllProducts);
router.route("/fruits").get(productController.getAllFruits);
router.route("/veggies").get(productController.getAllVeggies);
router.route("/specials").get(productController.getAllSpecials);
router.route("/").post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(
    productController.updateProduct,
  )
  .delete(productController.deleteProduct);

module.exports = router;
