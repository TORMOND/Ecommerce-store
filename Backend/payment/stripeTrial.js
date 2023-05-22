require('dotenv').config()
const Payment = require('../Schemas/paymentSchemas')
const mongoose = require('mongoose')

const stripe_secret_key = process.env.STRIPE_SECRET_KEY
const stripe_publishable_key = process.env.STRIPE_PUBLISHABLE_KEY
const stripe = require("stripe")(stripe_secret_key);


// const uuid = require("uuid")


const makePayment = async(req, res)=>{

    // const idempotencyKey = uuid()
    const { token, product } = req.body;
    console.log(token, product)
    // Create a PaymentIntent with the order amount and currency 
    return stripe.customers.create({
        email:token.email,
        source:token.id
    }).then(customer=>{
        stripe.charges.create({
            amount: product.price,
            currency:'usd',
            customer: customer.id,
            receipt_email:token.email,
            description:product.name,
        })
    }).then(result=> res.status(200).json(result)).then((result)=>{
        const paymentData = {
            amount: product.price,
            description:product.name,
            customer:token.id,
            receipt_email:token.card.name,
            product_id:product.id,
            details: token.card
          };
    
          createPayment (paymentData);
    })
    .catch(err=> console.log(err))
  }

  const createPayment = async(paymentData)=>{

    // const paymentData = req;

try{
const payment = await Payment.create({
    customer:paymentData.customer ,
     receipt_email:paymentData.receipt_email, 
     description: paymentData.receipt_email,
      price:paymentData.amount,
       product_id:paymentData.product_id, 
       details: paymentData.details
    })
// res.status(200).json(payment)
console.log(payment)
}catch(error) {
// res.status(400).json({error: error.message})
console.log(error)
}
}

  module.exports = { makePayment }