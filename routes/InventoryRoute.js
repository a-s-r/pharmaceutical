var express = require("express");
var router=express.Router();
var mongojs=require("mongojs");
var db=mongojs("mongodb://asr:asr@ds133281.mlab.com:33281/pharmaceutical", ['inventory']);

router.get("/inventories", function(req, res){
    db.inventory.find(function(err, docs){
        if(err){
            res.send(err);
        }
        res.json(docs);
    })
});

router.get("/inventory/:id", function(req, res){
    var id=req.params.id;

    db.inventory.findOne({"id":parseInt(id)}, function(err, doc){
        if(err){
            res.send(err);
        }
        res.json(doc);
    })
});

module.exports  =   router;