const express = require("express");
const { addBrand, getBrands, addCategory, updateBrand } = require("../../controllers/admin/brands-controller");
const { authMiddleware } = require("../../controllers/auth/auth-controller");


const router = express.Router();

router.post("/add", authMiddleware, addBrand);
router.post("/update", authMiddleware, updateBrand);
router.get("/get", getBrands);


module.exports = router;