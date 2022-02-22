const obj1 = require('../logger/logger');
const obj2 = require('../utill/helper')
const obj3= require('../validator/formatter')
const _ = require("lodash")
const express = require('express');


const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log(_.chunk(['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'],4));
    console.log(_.tail([1,3,5,7,9,11,13,17,19,21]))
    console.log(_.fromPairs([["horror","The shining"],["thriller","shutterisland"],["fantasy","parislabrynth"]]))
    obj1.printmessage('welcome to my application.I am Shipra and a part of functionup cohort')
    console.log(obj1.endpoint)
    obj2.batch('getbatch')
    obj3.trim()
    obj3.convert()
    res.send('My first ever api!')
});

module.exports = router;