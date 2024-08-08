const Product = require('../models/ProductModal')

const getAllProducts = async (req, res) => {
    // web needs all info whereas mobile needs "name,price,brand,image"
    let user = req.user
    // mobile user-agent => "Mozilla/5.0 (Linux; Android 10; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
    try {
        if (user === 'web') {
            const allProducts = await Product.find()
            res.status(201).json(allProducts)
        }
        else {
            const allProducts = await Product.find().select("-description -category -createdAt -ratings")
            res.status(201).json(allProducts)
        }

    }
    catch (err) {
        console.log(err)
    }
}


module.exports = { getAllProducts }