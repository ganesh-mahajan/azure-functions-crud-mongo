const ProductController = require("../controllers/productController");

const productControllerObject = new ProductController();

module.exports = function (context, req) {
    if (req.params.id) {
        // Get a doucment by given id
        productControllerObject.GetProductById(req.params.id)
            .then(response => {
                context.res = response;
                context.done();
            })
            .catch((err) => {
                context.res = {
                    status: 400,
                    body: {
                        message: "Invalid method or paramters.",
                        status: 400
                    }
                };
                context.done();
            });
    }
    else {
        // Get a doucment by given id
        productControllerObject.GetAllProducts()
            .then(response => {
                context.res = response;
                context.done();
            })
            .catch((err) => {
                context.res = {
                    status: 400,
                    body: {
                        message: "Invalid method or paramters.",
                        status: 400
                    }
                };
                context.done();
            });
    }
};