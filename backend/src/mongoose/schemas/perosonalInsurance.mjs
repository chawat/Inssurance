import mongoose from "mongoose";
 
const personalInsuranceSchema=new mongoose.Schema({
  
    IdPersonal: {
        type: mongoose.Schema.Types.ObjectId, // Referencing Personal schema
        ref: "Personal" // Referencing the "Personal" model
      },
  CountryOfResidence: mongoose.Schema.Types.String,
  Currency: mongoose.Schema.Types.String,
  SumInsured: mongoose.Schema.Types.Number,
  BasicCover: mongoose.Schema.Types.String,
  OptionalCover: [mongoose.Schema.Types.String],

}
);
export const PersonalInsurance=mongoose.model("PersonalInsurance",personalInsuranceSchema);
