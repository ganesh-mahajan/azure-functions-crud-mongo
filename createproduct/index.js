const ProductController = require("../controllers/productController");

const productControllerObject = new ProductController();

module.exports = function (context, req) {
    // Create new document or update existing.
    if (typeof req.body === "object" && req.body.product_name) {
        productControllerObject.CreateProduct(req.body)
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
        context.res = {
            status: 400,
            body: {
                message: "Invalid method or paramters.",
                status: 400
            }
        };
        context.done();
    }
};