const productModel = use("App/Models/Producto");

class ProductoController {
  async getAllProducts() {
    return productModel.all();
  }
}

module.exports = ProductoController;
