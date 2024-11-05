const {createCars,getCars,updateCars,deleteCars,individualCars}=require("../Controllers/CarController");
const express=require("express");
const router=express.Router();


router.post("/create",createCars);
router.get("/get",getCars);
router.put("/update/:id",updateCars);
router.delete("/delete/:id",deleteCars);
router.get("/individualCar/:id",individualCars);



module.exports=router;