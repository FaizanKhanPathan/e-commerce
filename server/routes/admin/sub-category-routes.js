const express = require("express");
const { authMiddleware } = require("../../controllers/auth/auth-controller");
const { getSubCategory, addSubCategory, getAllCategoryMenu } = require("../../controllers/admin/brands-controller");


const router = express.Router();

router.post("/add", addSubCategory)
router.get("/get", getSubCategory)

router.get("/get-all-menu", getAllCategoryMenu)

module.exports = router;