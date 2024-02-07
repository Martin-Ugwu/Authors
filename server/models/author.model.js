const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'save authors that are atleast three characters long'] },
 })

const Author = mongoose.model('Product', ProducSchema);
module.exports = Author;