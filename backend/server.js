const express = require("express");
const app = express()
const expressLayouts = require('express-ejs-layouts')




const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

// Database connection
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)


// routes
app.use('/', indexRouter)

app.listen(process.env.PORT || 3001)