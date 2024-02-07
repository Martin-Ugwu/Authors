const Author = require('../models/author.model');


module.exports.createAuthor = (req, res) =>{
    Product.create(req.body)
    .then((newProduct) => {
        res.status(201).json({
            product: newProduct
        });
    })
    .catch((err) =>{
        console.log(err);
        res.status(400).json(err);
    })
}
