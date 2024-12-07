const express = require("express");
const { getUsers, getPayments } = require("../../controllers/admin/admin-common-controller");


const router = express.Router();

router.get("/users/get", getUsers);
router.get("/payments/get", getPayments);


module.exports = router;