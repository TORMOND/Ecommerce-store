const mongoose = require('mongoose')
const Product = require('../Schemas/storeSchemas')
require('dotenv').config()
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe_secret_key = process.env.STRIPE_SECRET_KEY
const stripe_publishable_key = process.env.STRIPE_PUBLISHABLE_KEY
const stripe = require("stripe")(stripe_secret_key);

const getProduct = async ()=>{ 

  const product = await Product.findById(id)
   if(!product){
  return res.status(404).json({error: 'No such product'})
  }

const response = res.status(200).json(product)
return response
}

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  const productPrice = items.price()
  
  return productPrice;
};

const makePayment = async(req, res)=>{
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}



module.exports = { makePayment }

