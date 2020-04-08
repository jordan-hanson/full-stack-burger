const express = require("express")
const burger = require("../models/burger.js")

const router = express.Router()

router.get("/findall", function (req, res) {
    console.log("you hit the route")
    burger.selectAll()
})

module.exports = router

