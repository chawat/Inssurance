import mongoose from "mongoose";
 
const healthCareSchema=new mongoose.Schema({
  
    IdPersonal: {
        type: mongoose.Schema.Types.ObjectId, // Referencing Personal schema
        ref: "Personal" // Referencing the "Personal" model
      },
  HospitalNetwork: mongoose.Schema.Types.String,
  HospitalizationClass: mongoose.Schema.Types.String,
  Covertype: mongoose.Schema.Types.String,
  AdditionalCover: [mongoose.Schema.Types.String],
  OptionalCover: [mongoose.Schema.Types.String],
  TABLEOFINSUREDPERSONS:[{
    FullName:mongoose.Schema.Types.String,
    Relation:mongoose.Schema.Types.String,
    YearOfBirth:mongoose.Schema.Types.String,
    NSSFCover:mongoose.Schema.Types.String,
}]
}
);
export const HealthCareInsurance=mongoose.model("HealthCareInsurance",healthCareSchema);
