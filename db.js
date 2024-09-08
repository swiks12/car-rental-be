// databse connection part
const mongoose=require("mongoose");//to manage db connections and operations


// edbPvT8oz33HcRkb
module.exports=()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };

    console.log("MongoDB URL:", process.env.URL);  
    try{
        mongoose.connect(process.env.URL,connectionParams);
        console.log("Connected to database successfully");
    }catch(error){
        console.log(error);
        console.log("Could not connect to database");

    }
}
