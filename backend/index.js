const express = require('express')
const app = express()
const mongoDB = require('./db')
mongoDB();


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(5000)