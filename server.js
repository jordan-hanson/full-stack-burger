const express = require("express")

const app = express()

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

var routes = require("./controllers/burgers_controller")
app.use(routes)

app.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});