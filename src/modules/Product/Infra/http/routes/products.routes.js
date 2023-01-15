const express = require("express");
const ProductsController = require('../controllers/ProductContoller');

const productsRouter = express.Router();
const productController = new ProductsController();

productsRouter.get('/lenovo',productController.index);

module.exports = productsRouter;
