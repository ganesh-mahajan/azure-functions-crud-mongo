const ProductModel = require("../models/modelProduct");
const connetToDatabase = require("../db");

class Product {
    GetProductById(productId) {
        return new Promise((resolve, reject) => {
            connetToDatabase()
                .then(() => {
                    return ProductModel.findOne({ _id: productId })
                })
                .then((productItem) => {
                    resolve({
                        status: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: {
                            data: productItem
                        }
                    });
                })
                .catch((err) => {
                    reject({
                        status: 500,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: {
                            error: true,
                            data: err
                        }
                    });
                });
        });
    }

    GetAllProducts() {
        return new Promise((resolve, reject) => {
            connetToDatabase()
                .then(() => {
                    return ProductModel.find()
                })
                .then((productItem) => {
                    resolve({
                        status: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: {
                            data: productItem
                        }
                    });
                })
                .catch((err) => {
                    reject({
                        status: 500,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: {
                            error: true,
                            data: err
                        }
                    });
                });
        });
    }

    RemoveProductById(productId) {
        return new Promise((resolve, reject) => {
            connetToDatabase()
                .then(() => {
                    return ProductModel.findOneAndDelete({ _id: productId })
                })
                .then((productItem) => {
                    resolve({
                        status: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: {
                            data: "Successfully deleted document with id:" + productItem._id
                        }
                    });
                })
                .catch((err) => {
                    reject({
                        status: 500,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: {
                            error: true,
                            data: err
                        }
                    });
                });
        });
    }

    CreateProduct(productDetails) {
        return new Promise((resolve, reject) => {
            connetToDatabase()
                .then(() => {
                    return ProductModel.create(productDetails)
                })
                .then((productItem) => {
                    resolve({
                        status: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: {
                            data: "Product successfully created with id:" + productItem.id
                        }
                    });
                })
                .catch((err) => {
                    reject({
                        status: 500,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: {
                            error: true,
                            data: err
                        }
                    });
                });
        });
    }

    UpdateProduct(productId, productDetails) {
        return new Promise((resolve, reject) => {
            connetToDatabase()
                .then(() => {
                    return ProductModel.update({ _id: productId }, productDetails, { upsert: true })
                })
                .then((productItem) => {
                    resolve({
                        status: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: {
                            data: "Product successfully updated with id:" + productId
                        }
                    });
                })
                .catch((err) => {
                    reject({
                        status: 500,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: {
                            error: true,
                            data: err
                        }
                    });
                });
        });
    }
}

module.exports = Product;