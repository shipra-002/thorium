const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    stockAvailable: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalPages : Number,
    year:{ type: Number, default: 2021},
        
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //Books

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
