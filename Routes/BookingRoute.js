const express=require("express");
const {createBookings,getBookings, getIndividualBookings}=require("../Controllers/BookingController")

const router=express.Router();


router.post("/create",createBookings)
router.post("/get",getBookings)
router.post("/getIndividual/:id",getIndividualBookings)



module.exports=router;