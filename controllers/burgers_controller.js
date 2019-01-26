var express = require("express");

var burger = require("../models/burger");

var router = express();

router.get("/", function(req, res) {
    burger.select(function(data) {
        var hbsObject = {
            burgers: data
        };
    
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/:name", function(req, res) {
    var name = req.params.name
    burger.insert(name, function(res) {
        res.json({id: res.id})
    });
});

router.put("/api/:id", function(req, res) {
    var id = req.params.id
    burger.update(id, function(res) {
        console.log("burger " + id + " has been devoured!");
    });
});

module.exports = router;