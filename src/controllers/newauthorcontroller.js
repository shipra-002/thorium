const newauthorModel= require("../models/newauthorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await newauthorModel.create(author)
    res.send({data: authorCreated})
}

module.exports.createAuthor= createAuthor