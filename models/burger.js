const orm = require("../config/orm.js")

const burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (results) {
            cb(results)
        })
    },
    insertOne: function (columns, values) {
        orm.insertOne('burgers', columns, values)
    },
    updateOne: function () {
        orm.updateOne('burgers', 1)
    }
}
module.exports = burger