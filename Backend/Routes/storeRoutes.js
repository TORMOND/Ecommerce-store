const express = require('express')
const {
  getProducts, 
  getProduct, 
  createProduct, 
  deleteProduct, 
  updateProduct,
  getSelectedProducts
} = require('../controllers/storeController')

// const requireAuth = require('../middleware/requireAuth')

const router = express.Router()
// router.use(requireAuth)

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