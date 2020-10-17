const mongoose = require("mongoose")

const moduleSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    courseID : {
        type : String,
        required : true 
    },
    index : {
        type : Number,
        required : true 
    }
})

module.exports = mongoose.model("Module", moduleSchema)