const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({

    description: {
        type: String,
        required: true,
    },
    options: [{
        type: String,
        required: true
    }],
    answer: {
        type: String,
        required: true
    }
},
    { timestamps: true });

module.exports = mongoose.model('question', questionSchema)