require('dotenv').config()

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
            shipping:{
                name:token.card.name,
                address:{
                    country:token.card.address.country
                }
            }
        })
    }).then(result=> res.status(200).json(result))
    .catch(err=> console.log(err))
  }

  module.exports = { makePayment }