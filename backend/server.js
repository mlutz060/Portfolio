const express = require('express');
const env = require("dotenv").config()
const static = require("./routes/static")
const app = express();
const expressLayouts = require("express-ejs-layouts");


// routes
app.set("view engine", "ejs");
app.use(expressLayouts)
app.set("layout", "./layouts/layout")

app.use(static)

// local server information
const port = process.env.PORT;
const host = process.env.host

app.listen(port, () => {
    console.log(`app listening on ${host}:${port}`)
})