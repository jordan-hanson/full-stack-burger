const orm = require("../config/orm.js")

const burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            console.log("the burger js result", res)
            cb(res);
            // console.log("the cb results", res)
        });
    },
    insertOne: function (columns, values, cb) {
        orm.insertOne('burgers', columns, values, function (results) {
            cb(results)
            console.log("the burgerJs results ", results)
        });
    },
    updateOne: function (devoured, id) {
        orm.updateOne('burgers', devoured, id)
        console.log("now devoured", devoured)
    }
}
module.exports = burger