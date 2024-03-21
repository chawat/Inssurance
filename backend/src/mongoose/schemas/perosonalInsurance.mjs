import mongoose from "mongoose";
 
const personalInsuranceSchema=new mongoose.Schema({
  
  personal:mongoose.Schema.Types.ObjectId,
  Status:mongoose.Schema.Types.String,
  CountryOfResidence: mongoose.Schema.Types.String,
  Currency: mongoose.Schema.Types.String,
  SumInsured: mongoose.Schema.Types.Number,
  BasicCover:[ mongoose.Schema.Types.String],
  OptionalCover:[ mongoose.Schema.Types.String],
 

}
);
export const PersonalInsurance=mongoose.model("PersonalInsurance",personalInsuranceSchema);
