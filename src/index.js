const express = require('express');
const route = require('./routes/route.js');
const {default:mongoose} = require('mongoose')
const app=express();
const bodyParser = require("body-parser")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://ankitroy2292:OGOT1dcGwSofat7G@cluster0.gskxwwd.mongodb.net/Ankitroy2292-dB",{
    useNewUrlParser:true
})
.then(()=>console.log("MongoDb is connected"))
.catch(err=>console.log(err));

app.use('/', route);
const PORT=3000;

app.listen(PORT,function(req, res){
    console.log("epress is running on port number "+PORT);
})