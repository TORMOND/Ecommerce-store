const express = require('express')
const {
  getProducts, 
  getProduct, 
  createProduct, 
  deleteProduct, 
  updateProduct,
  getSelectedProducts
} = require('../controllers/storeController')

const router = express.Router()

// GET all Products
router.get('/', getProducts)

// GET a single Product
router.get('/:id', getProduct)

// POST a new Product
router.post('/', createProduct)

// DELETE a Product
router.delete('/:id', deleteProduct)

// UPDATE a Product
router.patch('/:id', updateProduct)

router.get('/carts', getSelectedProducts)


module.exports = router