import mongoose from "mongoose";
 
const personaldescSchema=new mongoose.Schema({
  
  name: mongoose.Schema.Types.String,
  description: mongoose.Schema.Types.String,


}
);
export const Personaldesc=mongoose.model("Personaldesc",personaldescSchema);
