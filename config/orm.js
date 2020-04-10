const connection = require("./connection.js")

const orm = {
    selectAll: function (tableName, cb) {
        var query = "SELECT * FROM " + tableName
        connection.query(query, function (err, result) {
            console.log("the connection query", connection.query)
            if (err) {
                throw err;
            }
            console.log("select all orm res", result)
            cb(result);
        });
    },
    insertOne: function (tableName, columns, values, cb) {
        var query = "INSERT INTO " + tableName + " " + "(" + columns + ")" + " " + "VALUES" + " " + "(?," + " " + false + ")" + ";"

        console.log("this is my sql query", query)

        connection.query(query, values, function (err, res) {
            if (err) throw err;
            console.log("this is the error", err)
            cb(res);
        });
    },
    updateOne: function (tableName, devoured, id) {
        var query = "UPDATE " + tableName + " SET " + devoured + "= true" + " WHERE " + "id = " + id + ";"

        connection.query(query, id, function (err, res) {
            console.log(err, res)
        })
    }
}

module.exports = orm