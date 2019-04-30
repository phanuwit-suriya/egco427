const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const User = require('./api/models/userListModel')
const routes = require('./api/routes/userListRoutes')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/VueUser', function (error) {
    if (error) throw error
    console.log('Successfully connected');
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

const port = process.env.PORT || 3000
app.listen(port)

console.log('User List started on : ' + port)