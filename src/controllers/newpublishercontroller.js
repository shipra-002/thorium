const newpublisherModel= require("../models/newpublisherModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await newpublisherModel.create(publisher)
    res.send({data: publisherCreated})
}

module.exports.createPublisher= createPublisher