const { getAllProducts } = require("../controllers/productControllers")
// name price brand image
const getAllProductsForMobile = async (_, res) => {
    console.log("the mobile bff")
    try {
        let allProducts = await getAllProducts()
        let responseProducts = allProducts.map(({ name, brand, price, image }) => (
            {
                name,
                brand,
                price,
                image
            }
        ))
        res.status(201).json(responseProducts)
    } catch (error) {
        console.log(error)
    }

}

module.exports = getAllProductsForMobile