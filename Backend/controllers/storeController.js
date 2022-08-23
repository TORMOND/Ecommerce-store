const Product = require('../Schemas/storeSchemas')
const mongoose = require('mongoose')

// get all workouts
const getProducts = async (req, res) => {
  const products = await Product.find({}).sort({createdAt: -1})
  res.status(200).json(products)
}

// Get a single Product
const getProduct = async (req, res)=>{
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'Not a valid Id'})
  }
const product = await Product.findById(id)
if(!product){
  return res.status(404).json({error: 'No such product'})
}
res.status(200).json(product)
}


// Create a Product
const createProduct = async (req, res) =>{
  const {title, brands, device, rating, price, img, details} = req.body
  try{
    const product = await Product.create({title, brands, device, rating, price, img, details})
   res.status(200).json(product)
  }catch(error) {
res.status(400).json({error: error.message})
  }
}

//Delete a Product
const deleteProduct = async(req, res)=>{
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'Not a valid Id'})
  }
  const product = await Product.findOneAndDelete({_id: id})

  if(!product) {
    return res.status(400).json({error: 'No such product'})
  }

  res.status(200).json(product)
}

// Update Product
const updateProduct = async(req, res)=>{
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const product = await product.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(product)
}

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getProduct
}