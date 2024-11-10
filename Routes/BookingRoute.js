const express=require("express");
const {createBookings,getBookings, getIndividualBookings,findBookedCarIds,bookingDataUpdates}=require("../Controllers/BookingController")

const router=express.Router();


router.post("/create",createBookings)
router.post("/get",getBookings)
router.get("/getIndividual/:bookingId",getIndividualBookings)
router.get("/getBookedCarIds/:bookingStartDate/:bookingEndDate", findBookedCarIds);
router.patch("/updateBookingInfo/:bookingId",bookingDataUpdates );





module.exports=router;