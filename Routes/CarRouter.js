const {createCars,getCars,deleteCars,individualCars}=require("../Controllers/CarController");
const express=require("express");
const router=express.Router();


router.post("/create",createCars);
router.get("/get",getCars);
router.delete("/delete/:id",deleteCars);
router.get("/individualCar/:id",individualCars);



module.exports=router;