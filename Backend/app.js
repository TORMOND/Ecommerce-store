
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const ProductsRoutes = require('./Routes/storeRoutes');
const userRoutes = require('./routes/userRoutes');
const stripePaymentRoutes = require('./routes/stripePaymentRoutes');
const payInforRoutes = require('./Routes/payInforRoutes');

app.use(express.json())

const cors = require('cors')
app.use(cors({ origin:"*"}))

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/Products', ProductsRoutes)
app.use('/api/user', userRoutes)
app.use('/api/payment', stripePaymentRoutes)
app.use('/api/payInfo', payInforRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 

