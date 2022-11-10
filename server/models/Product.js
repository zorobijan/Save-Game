const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    // trim: true
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
  // quantity: {
  //   type: Number,
  //   min: 0,
  //   default: 0
  // },
  stores: [{price: Number, seller: String, url: String }]
  // category: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Category',
  //   required: true
  // }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
