var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
    res.json({'message': 'hello world i changed!'})
})

module.exports = router