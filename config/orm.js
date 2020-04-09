const connection = require("./connection.js")

const orm = {
    selectAll: function (tableName, cb) {
        var query = "SELECT * FROM " + tableName
        connection.query(query, function (err, res) {
            console.log(err, res)
            cb(res)
        })
    },
    insertOne: function (tableName, values) {
        var query = "INSERT INTO " + tableName + " " + "(?, ?) VALUES (?, false)"
        connection.query(query, values, function (err, res) {
            console.log(err, res)
        })
    },
    updateOne: function (tableName, id) {
        var query = "UPDATE" + tableName + "SET devoured = true WHERE id = ?"
        connection.query(query, id, function (err, res) {
            console.log(err, res)
        })
    }
}

module.exports = orm