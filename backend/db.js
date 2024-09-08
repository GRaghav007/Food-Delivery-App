const mongoose = require('mongoose');   
const mongoURI = 'mongodb+srv://GoFood:Raghav@1234@cluster0.ajdbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async () => {

    await mongoose.connect(mongoURI,{useNewUrlParser: true}, () => {
        console.log("Connected");
    })
}

module.exports = mongoDB;

