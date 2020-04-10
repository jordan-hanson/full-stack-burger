const connection = require("./connection.js")

const orm = {
    selectAll: function (tableName, cb) {
        var query = "SELECT * FROM " + tableName
        connection.query(query, function (err, res) {
            console.log(err, res)
            cb(res)
        })
    },
    insertOne: function (tableName, columns, values) {
        var query = "INSERT INTO " + tableName + " " + "(" + columns + ")" + " " + "VALUES" + " " + "(?," + " " + false + ")" + ";"

        console.log("this is my sql query", query)

        connection.query(query, values, function (err, res) {
            console.log(err, res)
        })
    },
    updateOne: function (tableName, nowDevoured, id) {
        var query = "UPDATE " + tableName + " SET " + nowDevoured + " WHERE " + id + ";"

        connection.query(query, id, function (err, res) {
            console.log(err, res)
        })
    }
}

module.exports = orm