const { getAllProducts } = require("../controllers/productControllers")

const getAllProductsForWeb = async (_,res) => {
    console.log("the web bff")
    try {
        let allProducts = await getAllProducts();
        res.status(201).json(allProducts)
    }
    catch (err) {
        console.log(err)
    }

}

module.exports = getAllProductsForWeb