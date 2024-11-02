const express = require("express");
const { addCategory, getCategories, } = require("../../controllers/admin/brands-controller");
const { authMiddleware } = require("../../controllers/auth/auth-controller");


const router = express.Router();

router.post("/add", addCategory)
router.get("/get", getCategories)

module.exports = router;