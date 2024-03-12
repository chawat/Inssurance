import mongoose from "mongoose";
 
const adminSchema=new mongoose.Schema({
  
    // IdService: {
    //     type: mongoose.Schema.Types.ObjectId, // Referencing business servive collection 
    //     ref: "BusinessService" // Referencing the "Businessservice" model
    //   },
  Username:mongoose.Schema.Types.String,
  Password:mongoose.Schema.Types.String,
}
);
export const Admin=mongoose.model("Admin",adminSchema);