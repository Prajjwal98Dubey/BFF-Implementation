const mongoose = require('mongoose')
const startDB = async()=>{
    await mongoose.connect(process.env.MONGO_URI,{})
    console.log("DB connected")
}


module.exports = startDB