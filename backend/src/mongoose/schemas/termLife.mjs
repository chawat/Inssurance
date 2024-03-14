import mongoose from "mongoose";
 
const termLifeSchema=new mongoose.Schema({
  
  personal:mongoose.Schema.Types.ObjectId,

  Currency: mongoose.Schema.Types.String,
  SumInsured: mongoose.Schema.Types.Number,
  Status:mongoose.Schema.Types.String,
  PolicyDuration: mongoose.Schema.Types.String,
  BasicCover: mongoose.Schema.Types.String,
  OptionalCover: [mongoose.Schema.Types.String],

}
);
export const TermLifeInsurance=mongoose.model("TermLifeInsurance",termLifeSchema);
