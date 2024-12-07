const express = require("express");

const {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
  capturePayment,
  cancelPayment,
} = require("../../controllers/shop/order-controller");
const { authMiddleware } = require("../../controllers/auth/auth-controller");

const router = express.Router();

router.post("/create", authMiddleware, createOrder);
router.post("/capture",authMiddleware, capturePayment);
router.post("/cancel", cancelPayment);
router.get("/list/:userId", getAllOrdersByUser);
router.get("/details/:id", getOrderDetails);

module.exports = router;
