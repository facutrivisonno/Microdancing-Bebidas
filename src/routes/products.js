const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController.js");

router.get("/", productsController.index);

module.exports = router;