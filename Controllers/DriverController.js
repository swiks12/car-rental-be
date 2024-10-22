const Driver=require("../Models/Driver");
const cloudinary=require("../utils/cloudinary");


const createDrivers=async(req,res)=>{
    try{
        const result=await cloudinary.uploader.upload(req.body.image,
            {folder:"driverPhotos"},)
            const createDriver=await Driver.create({
            name:req.body.name,
            age:req.body.age,
            contact:req.body.contact,
            image:{
                public_id:result.public_id,
                url:result.secure_url
            },
    
    
        })
        res.status(201).json({message:"Driver data created!"})
    }
    catch(e){
        console.log(e);
    }
}


const getDriverLists=async(req,res)=>{
    try{

        const getDriverList=await Driver.find();

        if(!getDriverList){
            res.status(400).json({error:"Driver Informarmation not found"})
        }

        res.status(200).json(getDriverList)

    }catch(error){
        res.status(500).json({message:"Internal server error",error:error.message});
    }

}

module.exports={createDrivers,getDriverLists};