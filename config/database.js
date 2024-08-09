const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://login:login@login.51hs9.mongodb.net/?retryWrites=true&w=majority&appName=login")

const db = mongoose.connection

db.on("connected",(err)=>{
    if(err){
        console.log("DB not connected")
    }else{
        console.log("DB connected")
    }
})

module.exports = db