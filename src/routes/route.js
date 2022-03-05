const express = require('express');
const router = express.Router();

//const authorController= require("../controllers/authorController")
//const bookController= require("../controllers/bookController")

//router.get("/test-me", function (req, res) {
  //  res.send("My first ever api!")
//})

//router.post("/createUser", authorController.createAuthor  )

//router.get("/getAuthorsData", authorController.getAuthorsData)

//router.post("/createBook", bookController.createBook  )

//router.get("/getBooksData", bookController.getBooksData)

//router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

const newauthorController = require("../controllers/newauthorController")
const newbookController = require("../controllers/newbookController")
const newpublisherController = require("../controllers/newpublisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", newauthorController.createAuthor  )
router.post("/createPublisher", newpublisherController.createPublisher)
router.post("/createBook", newbookController.createBook  )
router.get("/getBooks", newbookController.getBooks)
router.put("/books",newbookController.books)
router.put("/updatedBook",newbookController.updatedBook)

module.exports = router;

//module.exports = router;