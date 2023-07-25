const express = require("express")
const favicon = require('serve-favicon')
const path = require('path')
const app = express()

app.set("view engine", "ejs")

app.use(express.static(__dirname + '/assets'));
app.use(favicon(path.join(__dirname, 'assets', 'icons', 'myfavicon.png')));

app.get("/", function (req, res) {
    res.render("pages/home/index")
})

app.get("/about", function (req, res) {
    res.render("pages/about/about")
})

app.get("/certificates", function (req, res) {
    res.render("pages/certificates/certificates")
})

app.listen(2023);
console.log("Rodando!")