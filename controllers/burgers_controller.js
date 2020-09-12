const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", {
            burger: data
        });
    })
});

router.post("/api/burger", function (req, res) {
    burger.insertOne(req.body.burgerInput, function (data) {
        res.redirect("/")
    })
});

router.put("/api/burger/:id", function (req, res) {
    burger.updateOne(req.params.id, function (data) {
        res.redirect("/")
    })
});

module.exports = router;