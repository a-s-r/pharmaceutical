var express = require("express");
var router=express.Router();
var mongojs=require("mongojs");
var ObjectId = mongojs.ObjectID;

var db=mongojs("mongodb://asr:asr@ds133281.mlab.com:33281/pharmaceutical", ['inventory']);



router.get("/list", function(req, res){
    db.inventory.find(function(err, docs){
        if(err){
            res.json({"success":false, "message":err});
        }
        res.json({"success":true, "message":"Ok !!", "data":docs});
    })
});

router.get("/:id", function(req, res){
    var id=req.params.id;

    db.inventory.findOne({"_id":ObjectId(id)}, function(err, doc){
        if(err){
            res.json({"success":false, "message":err});
        }
        res.json({"success":true, "message":"Ok !!", "data":doc});
    })
});

router.post('/add', function(req, res){
    var inventoryInfo  =   req.body;

    if(inventoryInfo.name!='' && inventoryInfo.stock!='' && inventoryInfo.description!='' && inventoryInfo.price!='' && inventoryInfo.manufacture_date!='' && inventoryInfo.expire_date!='' && inventoryInfo.status!=''){
        db.inventory.save(inventoryInfo, function(err, doc){
            if(err){
                res.json({"success":false, "message":err});
            }

            res.json({"success":true, "message":"Inventory added !!", "data":doc});
        });
    }else{
        res.json({"success":false, "message":"Something missing !! Please check and resend again."});
    }
});

router.put('/update/:id', function(req, res){
    var id=req.params.id;
    var inventoryInfo  =   req.body;
    
    if(inventoryInfo.name!='' && inventoryInfo.stock!='' && inventoryInfo.description!='' && inventoryInfo.price!='' && inventoryInfo.manufacture_date!='' && inventoryInfo.expire_date!='' && inventoryInfo.status!=''){
        db.inventory.update({"_id":ObjectId(id)}, inventoryInfo, function(err, doc){
            if(err){
                res.json({"success":false, "message":err});
            }

            res.json({"success":true, "message":"Inventory updated !!", "data":doc});
        });
    }else{
        res.json({"success":false, "message":"Something missing !! Please check and resend again."});
    }
});

router.delete('/remove/:id', function(req, res){
    var id=req.params.id;
    
    if(id!=''){
        db.inventory.remove({"_id":ObjectId(id)}, function(err, doc){
            if(err){
                res.json({"success":false, "message":err});
            }

            res.json({"success":true, "message":"Inventory removed !!"});
        });
    }else{
        res.json({"success":false, "message":"Something missing !! Please check and resend again."});
    }
});

module.exports  =   router;