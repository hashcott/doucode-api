const mongoose = require("mongoose")

const checkpointSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    moduleID : {
        type : String,
        required : true 
    },
    index : {
        type : Number,
        required : true 
    }
})

module.exports = mongoose.model("Checkpoint", checkpointSchema)