const mongoose = require('mongoose');   
const mongoURI = 'mongodb+srv://GoFood:Raghav@1234@cluster0.ajdbh.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async () => {

    await mongoose.connect(mongoURI,{useNewUrlParser: true}, async (err, result) => {
        if(err){
            console.log("----", err);
        }
        else{
            console.log("Connected");
            const fetched_data = await mongoose.connection.db.collection("fooddata");
            fetched_data.find({}).toArray(async function(err, data){
                const foodCategory = await mongoose.connection.db.collection("foodcategory");
                foodCategory.find({}).toArray(function(err, catData){
                    if(err) console.log(err);
                    else{
                        global.fooddata = data;
                        global.foodCategory = catData;
                    }
                })
                // if(err) console.log(err);
                // else{
                //     global.fooddata = data;
                // }
            })
        }
    })
}

module.exports = mongoDB;

