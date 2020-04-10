const express = require("express")
const burger = require("../models/burger.js")

const router = express.Router()

router.get("/", function (req, res) {
    console.log("you hit the route")
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log('hbsobject', hbsObject);
        res.render("index", hbsObject)
    })
    //res.render("index")
    //res.send('TESTING!!!')
})
router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        res.json({ id: result.insertId });
        console.log("get the id", { id: result.insertId })
    });
});

module.exports = router

