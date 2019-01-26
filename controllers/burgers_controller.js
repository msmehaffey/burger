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

router.delete("/", function(req, res) {
    burger.delete(function(results) {
        res.json(results);
    });
});

router.post("/api", function(req, res) {
    var name = req.body.burger_name
    burger.insert(name, function(result) {
        res.json({id: result.id})
    });
});

router.put("/api/:id", function(req, res) {
    var id = req.params.id
    burger.update(id, function(results) {
        console.log("burger " + id + " has been devoured!");
        res.json(results)
    });
});

module.exports = router;