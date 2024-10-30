const express=require("express");
const router=express.Router();
const {getPackageDatas,updatePackages}=require("../Controllers/PackageController");

router.get("/get",getPackageDatas);
router.put("/update",updatePackages);


module.exports=router;