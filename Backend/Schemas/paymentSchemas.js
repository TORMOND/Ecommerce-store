const mongoose = require('mongoose')

const Schema = mongoose.Schema

const paymentSchema = new Schema({
  customer: {
    type: String,
    required: true
  },
  receipt_email: {
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  product_id:{
    type: String,
    required:false
  },
  details: {
    type:Array,
    required: true
  },
}, { timestamps: true })

module.exports = mongoose.model('Payment', paymentSchema)