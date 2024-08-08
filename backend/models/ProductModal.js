const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    brand: {
        type: String
    },
    category: {
        type: String
    },
    image: {
        type: String
    },
    createdAt: {
        type: String,
        default: Date.now()
    },
    ratings: {
        type: Number,
        default: 0
    }
})


module.exports = mongoose.model('Product', productSchema)