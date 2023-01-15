const GetProductService = require("../../../Services/GetProductsService");

class ProductController{
    async index(request, response){
        let listProducts = [];
        const getProductService = new GetProductService();
    
        listProducts = await getProductService.execute();

        return response.json(listProducts);
    }
}

module.exports = ProductController;