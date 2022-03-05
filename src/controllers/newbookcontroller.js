const { count } = require("console")
const { updateMany } = require("../models/newauthorModel")
const newauthorModel = require("../models/newauthorModel")
const newbookModel= require("../models/newbookModel")
const newpublisherModel = require("../models/newpublisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    //validation a
    if(!authorId) return res.send('The request is not valid as the author details are required.')

    //validation b
    let author = await newauthorModel.findById(authorId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')

    //validation c
    if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 

    //validation d
    let publisher = await newpublisherModel.findById(publisherId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await newbookModel.create(book)
    return res.send({data: bookCreated})
}
const books = async function(req,res){
    let nbooks= await newbookModel.updateMany(
    {publisher:"62206f6393b7d1ad6b391405",publisher:"62206fa493b7d1ad6b391409" },
        {$set:{isHardCover:true}},
        {new:true},
    )
    res.send({msg:nbooks})
}
// const updateBooks = async function (req, res) {
//   // 5. a)
//   let hardCoverPublishers = await publisherModel.find({
//     name: { $in: ["Penguin", "HarperCollins"] },
//   });
//   let publisherIds = hardCoverPublishers.map((p) => p._id); //publisherIds is an array of publisher _id values

//   await bookModel.updateMany(
//     { publisher: { $in: publisherIds } },
//     { isHardCover: true }
//   );
//  let highRatedAuthors = await authorModel.find({ rating: { $gt: 3.5 } });
//   let authorIds = highRatedAuthors.map((a) => a._id);

//   await bookModel.updateMany(
//     { author: { $in: authorIds } },
//     { $inc: { price: 10 } }
//   );

//   let updatedBooks = await bookModel.find();
//   res.send({ updatedBookCollection: updatedBooks });
// };
const updatedBook = async function(req,res){
    let ubooks = await newbookModel.updateMany(
        { authorrating:{$gt:3.5}},
         {$inc:{price:10}},
         {new:true},
    )
        res.send({msg:ubooks}

     )   
        }

const getBooks= async function (req, res) {
    let books = await newbookModel.find().populate('author publisher')
    res.send({data: books})
}


module.exports.createBook= createBook
module.exports.getBooks= getBooks
module.exports.books=books
module.exports.updatedBook=updatedBook
