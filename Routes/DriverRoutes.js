const {createDrivers,getDriverLists}=require("../Controllers/DriverController")
const express=require("express");
const router=express.Router();


router.post("/create",createDrivers);
router.get("/getDrivers",getDriverLists);



module.exports=router;