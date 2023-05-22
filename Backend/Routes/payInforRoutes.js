const express = require('express')
const router = express.Router()
const {
    getPayments,
    getOnePayment,
    makePayment,
    deletePayment
} = require('../controllers/PaymentController')

router.post("/makePayment", makePayment);
router.post("/getPayments", getPayments);
router.post("/getOnePayment", getOnePayment);
router.post("/deletePayment", deletePayment);

module.exports = router