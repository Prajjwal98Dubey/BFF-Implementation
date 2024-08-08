const Product = require('../models/ProductModal')

const getAllProducts = async (req, res) => {
    // web needs all info whereas mobile needs "name,price,brand,image"
    let user = req.user
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


// mobile (Andorid) user-agent => "Mozilla/5.0 (Linux; Android 10; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"

// mobile (ios) user-agent => "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1" 