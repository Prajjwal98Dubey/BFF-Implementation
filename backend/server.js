const express = require('express')
const startDB = require('./db')
const dotenv = require('dotenv')
const productRouter = require('./routes/productRoutes')
const app = express()
const cors = require('cors')
const bffRouter = require('./routes/bffRoutes')
dotenv.config()
app.use(cors())
app.use(express.json())
// app.use('/products',productRouter)
app.use('/api/v1/bff',bffRouter)
const start = async()=>{
    await startDB()
    app.listen(5001,()=>console.log("server listening at 5001."))
}

start()