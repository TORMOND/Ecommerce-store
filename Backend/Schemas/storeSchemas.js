const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  brands: {
    type: String,
    required: true
  },
  device:{
    type: String,
    required: true
  },
  rating:{
    type: Number,
    required: true
  },
  color:{
    type: String,
    required:false
  },
  price: {
    type: Number,
    required: true
  },
  popularity:{
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  details: {
    type:Array,
    required: true
  },
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)