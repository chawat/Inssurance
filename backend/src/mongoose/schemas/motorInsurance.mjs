import mongoose from "mongoose";
 
const motorInsuranceSchema=new mongoose.Schema({
  
    personal:mongoose.Schema.Types.ObjectId,
     PlanDetail:mongoose.Schema.Types.String
}
);
export const MotorInsurance=mongoose.model("MotorInsurance",motorInsuranceSchema);