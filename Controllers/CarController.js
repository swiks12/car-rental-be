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



const updateCars = async (req, res) => {
    try {
        console.log(req.body);
        // Base data to update without image
        let data = {
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            fuelType: req.body.fuelType,
            transmissionType: req.body.transmissionType,
            seatingCapacity: req.body.seatingCapacity,
            mileage: req.body.mileage,
            numberPlate: req.body.numberPlate,
            shortDistanceBasePrice: req.body.shortDistanceBasePrice,
            longDistanceBasePrice: req.body.longDistanceBasePrice,
            availability: req.body.availability
        };

        // Check if a new image is provided; if not, skip the upload
        if (!req.body.image.public_id) {
            const result = await cloudinary.uploader.upload(req.body.image, {
                folder: "carImages",
            });
            data = {
                ...data,
                image: {
                    public_id: result.public_id,
                    url: result.secure_url
                }
            };
        }

        // Update the car in the database
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, data, { new: true });

        if (!updatedCar) {
            return res.status(404).json({ message: "Car Not Found!" });
        }

        res.status(200).json({ message: "Car Update Successful!", updatedCar });
    } catch (error) {
        res.status(500).json({ message: "Server Error!", error: error.message });
    }
};

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


module.exports={createCars,getCars,updateCars,deleteCars,individualCars};