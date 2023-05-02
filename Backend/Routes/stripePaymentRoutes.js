const express = require('express')
const router = express.Router()
const { makePayment } = require('../payment/stripeTrial')

router.post("/create-payment-intent", makePayment);

module.exports = router