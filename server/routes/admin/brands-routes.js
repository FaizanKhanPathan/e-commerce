const express = require("express");
const { addBrand, getBrands, addCategory } = require("../../controllers/admin/brands-controller");
const { authMiddleware } = require("../../controllers/auth/auth-controller");


const router = express.Router();

router.post("/add", authMiddleware, addBrand);
router.get("/get", getBrands);


router.post("/add", authMiddleware, addCategory)

module.exports = router;