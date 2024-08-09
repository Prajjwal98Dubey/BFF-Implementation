const getAllProductsForMobile = require('../bff-controllers/mobileBffController')
const getAllProductsForWeb = require('../bff-controllers/webBffController')

const bffRouter = require('express')()


bffRouter.route('/web').get(getAllProductsForWeb)
bffRouter.route('/mobile').get(getAllProductsForMobile)


module.exports = bffRouter