const {createDrivers,getDriverLists,updateDrivers,deleteDrivers,individualDrivers}=require("../Controllers/DriverController")
const express=require("express");
const router=express.Router();


router.post("/create",createDrivers);
router.get("/get",getDriverLists);
router.put("/update/:id",updateDrivers);
router.delete("/delete/:id",deleteDrivers);
router.get("/getIndividual/:id",individualDrivers);




module.exports=router;