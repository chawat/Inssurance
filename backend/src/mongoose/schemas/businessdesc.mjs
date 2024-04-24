import mongoose from "mongoose";
 
const businessdescSchema=new mongoose.Schema({
  
  name: mongoose.Schema.Types.String,
  description: mongoose.Schema.Types.String,


}
);
export const Businessdesc=mongoose.model("Businessdesc",businessdescSchema);
