const { getAllProducts } = require('../controllers/productControllers')
const detectDevice = require('../middlewares/deviceMiddleware')

const productRouter = require('express').Router()


productRouter.route('/all').get(detectDevice,getAllProducts)


module.exports = productRouter