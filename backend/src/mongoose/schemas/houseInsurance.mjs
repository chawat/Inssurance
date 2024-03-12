import mongoose from "mongoose";
 
const houseInsuranceSchema=new mongoose.Schema({
  

    personal:mongoose.Schema.Types.ObjectId,
    ConstructionValue:mongoose.Schema.Types.Number,
    ContentValue:mongoose.Schema.Types.Number,
    ApplicationStatus:mongoose.Schema.Types.String,
    ResidenceStatus:mongoose.Schema.Types.String,
    BasicCover: [mongoose.Schema.Types.String],
    OptionalCover: [mongoose.Schema.Types.String],
}
);
export const HouseInsurance=mongoose.model("HouseInsurance",houseInsuranceSchema);