const express = require("express");

const {
  getFilteredProducts,
  getProductDetails,
  getSellerAndFeatureProduct,
} = require("../../controllers/shop/products-controller");

const router = express.Router();

router.get("/get", getFilteredProducts);
router.get("/seller-feature", getSellerAndFeatureProduct);
router.get("/get/:id", getProductDetails);

module.exports = router;
