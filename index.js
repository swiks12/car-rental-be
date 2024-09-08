const express= require("express");
const cors=require("cors");
require('dotenv').config();
const connection=require("./db")

 // yo chahi import garne tarika ho
const app=express();
//  creating an instance in express 
// app is like a server yasmai nai handle requests garxam ani aru kaam pani huncha

app.use(cors());
const PORT=4000;
// console.log("before connection");
connection();
// console.log("after connection");

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})