import mongoose from "mongoose";
 
const motorInsuranceSchema=new mongoose.Schema({
  
    IdPersonal: {
        type: mongoose.Schema.Types.ObjectId, // Referencing Personal schema
        ref: "Personal" // Referencing the "Personal" model
      },
    PlanDetail:mongoose.Schema.Types.String
}
);
export const MotorInsurance=mongoose.model("MotorInsurance",motorInsuranceSchema);