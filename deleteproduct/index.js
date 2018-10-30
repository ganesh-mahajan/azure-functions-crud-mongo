const ProductController = require("../controllers/productController");

const productControllerObject = new ProductController();

module.exports = function (context, req) {
    if (req.params.id) {
        // Remove doucument by name if existing
        productControllerObject.RemoveProductById(req.params.id)
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