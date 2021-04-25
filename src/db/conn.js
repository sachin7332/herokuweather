const mongoose = require('mongoose');

const DB = 'mongodb+srv://plenum:System@123@cluster0.6ljfb.mongodb.net/weather?retryWrites=true&w=majority';

mongoose.connect(DB ,
 {useNewUrlParser:true , useUnifiedTopology:true ,useCreateIndex:true 
}).then(() => {
    console.log("MongoDB connection successful");
}).catch((e) =>
{
    console.log("Connection error")
});
  