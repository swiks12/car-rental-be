const {createDrivers}=require("../Controllers/DriverController")
const express=require("express");
const router=express.Router();


router.post("/create",createDrivers);


module.exports=router;