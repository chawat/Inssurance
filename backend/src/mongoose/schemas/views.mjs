import mongoose from "mongoose";
 
const nbviews=new mongoose.Schema({
  
  personalacc:mongoose.Schema.Types.Number,
  healthcare:mongoose.Schema.Types.Number,
  motor:mongoose.Schema.Types.Number,
  house:mongoose.Schema.Types.Number,
  travel:mongoose.Schema.Types.Number,
  termlife:mongoose.Schema.Types.Number,
  grouppersonalacc:mongoose.Schema.Types.Number,
  grouphealthcare:mongoose.Schema.Types.Number,
  cargo:mongoose.Schema.Types.Number,
  moneyinsurance:mongoose.Schema.Types.Number,
  machinerybreakdown:mongoose.Schema.Types.Number,
  motorfleetinsurance:mongoose.Schema.Types.Number,
  

}
);
export const Nbviews=mongoose.model("views",nbviews);