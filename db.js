const mongoose = require("mongoose")

module.exports = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/doucode", {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("Mongodb connected")
    } catch (error) {
        throw new("Not connected to mongodb")
    }
}