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
    updateOne: function (nowDevoured, id) {
        orm.updateOne('burgers', nowDevoured, id)
        console.log("now devoured", nowDevoured)
    }
}
module.exports = burger