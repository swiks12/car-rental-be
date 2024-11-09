const express= require("express");
const cors=require("cors");
require('dotenv').config();
const connection=require("./db")
const bodyParser=require("body-parser");
const authRouter=require("./Routes/AuthRouter")
const driverRouter=require("./Routes/DriverRoutes")
const carRouter=require("./Routes/CarRouter")
const packageRouter=require("./Routes/PackageRoute")
const bookingRouter=require("./Routes/BookingRoute")


 // yo chahi import garne tarika ho
const app=express();
//  creating an instance in express 
// app is like a server yasmai nai handle requests garxam ani aru kaam pani huncha
//app.use is a middleware function
app.use(cors());
// app.use(bodyParser.json());//parses the body of json data vanera bujhinxa

const PORT=4000;
connection();


app.use(bodyParser.json({ limit: '10mb' })); // JSON data limit set to 10MB
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true })); // URL-encoded data limit set to 10MB
app.use('/auth',authRouter)
app.use('/driver',driverRouter)
app.use('/car',carRouter);
app.use('/package',packageRouter);
app.use('/booking',bookingRouter);




app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})