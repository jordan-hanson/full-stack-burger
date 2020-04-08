const orm = require("../config/orm.js")

const burger = {
    selectAll: function () {
        orm.selectAll('burger')
    },
    insertOne: function () {
        orm.insertOne('burger', ["burger_id", "devoured", "New Burger"])
    },
    updateOne: function () {
        orm.updateOne('burger', 1)
    }
}
module.exports = burger