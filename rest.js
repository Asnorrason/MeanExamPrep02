'use strict'
var express = require('express');
var router = express.Router();

var tryArr = [1,2,3];

//CRUD
/* GET number */
router.get('/', function(req, res, next) {
    res.json({number: tryArr});
});

/*Create number */
router.post('/number', function(req, res, next){
    tryArr.push(parseInt(req.body.number));
    res.json({message : 'Created with the number : ' + req.body.number});
});

/* Change number */
router.put('/:current/:new', function(req, res, next){
    var index = tryArr.indexOf(parseInt(req.params.current));
    console.log(index);
    if(index != -1){
        tryArr[index] = parseInt(req.params.new);
        res.json({message : "Changed to: "+tryArr[index]});
    } else {
        res.json({"message" : "Something went wrong"});
    }

    next;

});

/*Delete number*/
router.delete('/:current',function(req, res, next){
    var index = tryArr.indexOf(parseInt(req.params.current));
    console.log(index);
    if(index != -1){
        tryArr.splice(index, 1);
        res.json({message : "Deleted at index:  "+tryArr[index]});
    } else {
        res.json({"message" : "Something went wrong"});
    }

    next;

});





module.exports = router;
