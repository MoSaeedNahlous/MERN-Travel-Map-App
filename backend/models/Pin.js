const mongoose = require('mongoose')


const pinSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true,
        ref:"User"
    },
    title: {
        type: String,
        require: true,
        min: 5,
    },
    desc: {
        type: String,
        require: true,
        min:10
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    lat: {
        type: Number,
        require:true,
    },
    long: {
        type: Number,
        require:true,
    },
    
}, { timestamps: true })

module.exports = mongoose.model('Pin',pinSchema)