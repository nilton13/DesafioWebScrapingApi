const express = require('express');
const productsRouter = require('../../../../modules/Product/Infra/http/routes/products.routes');

const routes = express.Router();

routes.use('/products', productsRouter);

routes.get('/', (request, response) =>{
    return response.json({ message:'Hello Dev!' });
});

module.exports = routes;