const express= require("express");
const cors=require("cors");
require('dotenv').config();
const connection=require("./db")
const bodyParser=require("body-parser");
const authRouter=require("./Routes/AuthRouter")
const driverRouter=require("./Routes/DriverRoutes")

 // yo chahi import garne tarika ho
const app=express();
//  creating an instance in express 
// app is like a server yasmai nai handle requests garxam ani aru kaam pani huncha
//app.use is a middleware function
app.use(cors());
app.use(bodyParser.json());//parses the body of json data vanera bujhinxa

const PORT=4000;
connection();

app.use('/auth',authRouter)
app.use('/driver',driverRouter)

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})