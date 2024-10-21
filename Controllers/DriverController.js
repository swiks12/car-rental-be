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

module.exports={createDrivers};