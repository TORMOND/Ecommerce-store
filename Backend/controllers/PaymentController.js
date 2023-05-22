const Payment = require('../Schemas/paymentSchemas')
const mongoose = require('mongoose')

const getPayments = async(req, res)=>{
const payments = await Payment.find({}).sort({createdAt: -1})
  res.status(200).json(payments)
}

const getOnePayment = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error: 'Not a valid Id'})
    }
  const payment = await Payment.findById(id)
  if(!payment){
    return res.status(404).json({error: 'No such product'})
  }
  res.status(200).json(payment)
}

const makePayment = async(req, res)=>{
              const  {customer, receipt_email, description, price, product_id, details} = req.body 
    try{
        const payment = await Payment.create({customer, receipt_email, description, price, product_id, details})
       res.status(200).json(payment)
      }catch(error) {
    res.status(400).json({error: error.message})
      }
}

const deletePayment = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error: 'Not a valid Id'})
    }
    const payment = await Payment.findOneAndDelete({_id: id})
  
    if(!payment) {
      return res.status(400).json({error: 'No such product'})
    }
  
    res.status(200).json(product)
}

module.exports = {
    getPayments, 
    getOnePayment,
    makePayment,
    deletePayment
}


// Write code in javascript that creates table in mongoDb after a stripe successful payment