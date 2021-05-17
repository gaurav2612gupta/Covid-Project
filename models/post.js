const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const postSchema = new Schema ({
    User : {
        type : String,
        required : true
    },

    Mobile : {
        type : Number,
        required : true 
    },
    
    
    Email : {
        type: String,
        required: true
    },

    BloodGr:{
         e: String
    },
    
    
    State : {
        type: String,
        required: true
    },
    
    
    Pin : {
        type: Number,
        required: true
    }




})


module.exports = mongoose.model('Post',postSchema)
