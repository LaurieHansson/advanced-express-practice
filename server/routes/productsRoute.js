
const express = require('express');
const router = express.Router();

const productsController = require("../controllers/ProductController");

router.get("/productss", productsController.list);

router.get("/productss/:id", productsController.show);

router.post("/productss", productsController.create);

module.exports = router;