import mongoose from "mongoose";
 
const businessSchema=new mongoose.Schema({
  
    IdService: {
        type: mongoose.Schema.Types.ObjectId, // Referencing business servive collection 
        ref: "BusinessService" // Referencing the "Businessservice" model
      },
  CompanyName:mongoose.Schema.Types.String,
  BusinessType:mongoose.Schema.Types.String,
  NumberOfEmployees:mongoose.Schema.Types.Number,
  ContactOfPerson:mongoose.Schema.Types.String,
  Email:mongoose.Schema.Types.String,
  Mobile:mongoose.Schema.Types.Number,
  Landline:mongoose.Schema.Types.Number,
}
);
export const BusinessInsurance=mongoose.model("BusinessInsurance",businessSchema);
