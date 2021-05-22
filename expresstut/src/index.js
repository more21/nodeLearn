const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

const staticPath = path.join(__dirname, "../public");
// to set the view engine
app.set("view engine", "hbs");

// app.use(express.static(staticPath));

// template engine route
app.get("", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});


app.listen(port, (req, res) => {

});