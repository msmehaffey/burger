var express = require("express");

var burger = require("../models/burger");

var router = express();

router.get("*", function(req, res) {
    burger.select(function(data) {
        var hbsObject = {burgers: data};
    })
    console.log(hbsObject);
    res.render("index", hbsObject);
});

router.post("*", function(req, res) {

    burger.insert(name, function(res) {
        res.json({id: res.id})
    });
});

router.put("*", funciton )