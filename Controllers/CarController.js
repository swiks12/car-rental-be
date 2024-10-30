const Car=require("../Models/Car");
const cloudinary=require("../utils/cloudinary")


// create
const createCars=async(req,res)=>{
    try {
        const result=await cloudinary.uploader.upload(req.body.image,{folder:"carImages"},)
        const createCarInfo=await Car.create({
            brand:req.body.brand,
            model:req.body.model,
            year:req.body.year,
            fuelType:req.body.fuelType,
            transmissionType:req.body.transmissionType,
            seatingCapacity:req.body.seatingCapacity,
            mileage:req.body.mileage,
            numberPlate:req.body.numberPlate,
            shortDistanceBasePrice:req.body.shortDistanceBasePrice,
            longDistanceBasePrice:req.body.longDistanceBasePrice,
            image:{
                public_id:result.public_id,
                url:result.secure_url
            },
            availability:req.body.availability
        })
        res.status(200).json({message:"Car information added successfully!"})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error",error:error.message})
        
    }
}


//get all cars
const getCars=async(req,res)=>{
    try {
        const getCar=await Car.find();
        if(!getCar){
            res.status(400).json({message:"Cannot get Cars"})
        }
        res.status(200).json(getCar);
    } catch (error) {
        res.status(500).json({message:"Internal Server Error!",error:error.message})
    }
}


// deleteCars
const deleteCars=async(req,res)=>{
    try {
        const deleteCar=await Car.findByIdAndDelete(req.params.id)
        if(!deleteCar){
            res.status(400).json({message:"Cannot delete car information!"})
        }
        res.status(200).json({message:"Car information deleted succesfully!"})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error",error:error.message})  
    }
}

// get individual car details

const individualCars=async(req,res)=>{
    try {
        const individualCar=await Car.findById(req.params.id);
        if(!individualCar){
            res.status(400).json({message:"Cannot get car information"});
        }
        res.json(individualCar);
    } catch (error) {
        res.status(500).json({message:"Internal Server Error",error:error.message})
    }
}


module.exports={createCars,getCars,deleteCars,individualCars};