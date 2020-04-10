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
        return res.render("index", hbsObject);
        // return res.status(200).json();
    })
    // res.render("index")
    //res.send('TESTING!!!')
});
router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
        res.json({ id: result.insertId });
        console.log("get the id", { id: result.insertId })
    });
});
router.put("/api/burgers/:id", function (req, res) {
    let id = req.params.id;
    console.log("this is my burger id =", id)
    burger.updateOne(("devoured"), (req.params.id), function (result) {
        console.log("give a 404 why", result)
        if (result.changedRows === 0) {
            return res.status(404).end()
        } else {
            status(200).end();
        };
    });
})

module.exports = router

