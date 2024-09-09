const express = require('express')
const app = express()
const mongoDB = require('./db')
mongoDB();

// We have to allow cross-origin such that we can connect front-end and back-end.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));

app.listen(5000)