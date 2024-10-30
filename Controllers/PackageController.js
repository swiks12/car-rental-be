const Package=require("../Models/Package");

const getPackageDatas=async(req,res)=>{
    try {
        const getPackageData=await Package.findById("672212ad522f580761a2d5e4");
        if(!getPackageData){
            res.status(400).json({message:"Package details not found!"});
        }

        // yasto ma chai getPackageData bhutra ma janxa
        // res.json({getPackageData});
        res.json(getPackageData);
    } catch (error) {
        res.status(500).json({message:"Internal Server Error!",error:error.message});
    }

}


// update one
const updatePackages=async(req,res)=>{
    try {
        const updatePackage=await Package.findByIdAndUpdate('672212ad522f580761a2d5e4',{
            shortDistancePackage:req.body.shortDistancePackage,
            longDistancePackage:req.body.longDistancePackage,
            driverShortDistance:req.body.driverShortDistance,
            driverLongDistance:req.body.driverLongDistance, 
        });
        if(!updatePackage){
            res.status(400).json({message:"Package Information not found!"})
        }
        res.status(200).json({message:"Package Update Successfull!"})
    } catch (error) {
       res.status(500).json({message:"Internal Server Error",error:error.message})
    }  
    }


module.exports={getPackageDatas,updatePackages};