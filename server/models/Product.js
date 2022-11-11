const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    // trim: true
  },
  image: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  currency: {
    type: String
  },
  currentLowestPrice: {
    type: Number
  },
  ReleaseDate: {
    type: String,
  },
  currentLowestPrice: {
    type: Number,
  },
  stores: [{price: Number, seller: String, url: String }]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
