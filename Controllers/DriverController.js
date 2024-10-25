const Driver=require("../Models/Driver");
const cloudinary=require("../utils/cloudinary");

//  create
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
        res.status(500).json({message:"Internal Server Error",error:error.message})
    }
}

// read
const getDriverLists=async(req,res)=>{
    try{

        const getDriverList=await Driver.find();

        if(!getDriverList){
            return res.status(400).json({error:"Driver Informarmation not found"})
        }

        res.status(200).json(getDriverList);

    }catch(error){
        res.status(500).json({message:"Internal server error",error:error.message});
    }

}

// update driver information
const updateDrivers=async(req,res)=>{
    try {
        console.log(req.body)
            let data={
                name:req.body.name,
                age:req.body.age,
                contact:req.body.contact,
            }
            // jaba image select nagarkina ahami update garcham tyati bele public_id gairako huncha tara jaba image arko kei select graxam tyas bela hamro cloudinary ma update navakole hami sanga public_id hudaina so public id navako belama chai cloudinary ma uodate hanne logic lekheko
            if(!req.body.image.public_id){
                const result=await cloudinary.uploader.upload(req.body.image,
                    {folder:"driverPhotos"},)
                    data={...data,image:result}
            }
            
        const updateDriver=await Driver.findByIdAndUpdate(req.params.id,
            data
        )
        if(!updateDriver){
            return res.status(404).json({message:"Driver Not Found!"})
        }
        res.status(200).json({message:"Driver Update Successfull!"})
    } catch (error) {
        res.status(404).json({message:"Server Error!",error:error.message})
    }

}



// delete
const deleteDrivers=async(req,res)=>{
    try{

        const deleteDriver=await Driver.findByIdAndDelete(req.params.id);
        if(!deleteDriver){
            return res.status(400).json({message:"Driver not found and deleted."})
        }
        res.json({deleteDriver})
    }catch(error){
        res.status(500).json({message:"Internal Server Error",error:error.message});
    }
}


// get individual driver information

const individualDrivers=async(req,res)=>{
    try {
        const individualDriver=await Driver.findById(req.params.id);
        if(!individualDriver){
           return res.status(400).json({message:'driver not found!'})
        }
        res.json(individualDriver);
    } catch (error) {
        res.status(500).json({error:"Internal Server Error",error:error.message});
    }
}

module.exports={createDrivers,getDriverLists,updateDrivers,deleteDrivers,individualDrivers};