// import the products monoose model
const products = require("../models/productModel");

// finds all products and lists them
module.exports.list = function (req, res, next) {
  products.find({}).exec()
    .then(products => {
      return res.send(products);
    })
    .catch(err => {
      console.log(" no products to show ", err);
      return res.send(err);
    });
};

//  find products by ID and show
module.exports.show = function (req, res, next) {
  products.findById(req.params.id).exec()
    .then(product => {
      return res.send(product);
    })
    .catch(err => {
      console.log("no product to show  ", err);
      return res.send(err);
    });
};

// save and create the new document into mongoDB

module.exports.create = function (req, res, next) {
  const product = new products();
 product.body = req.body.body;
  product.save((err, newproduct) => {
    if (err) return res.send(err);
    return res.send(newproduct);
  });
};