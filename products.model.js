const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },
  createAt: {
    type: Date,
    required: true,
  },
  sales: {
    type: Number,
  },
})

module.exports = mongoose.model('Product', productSchema);