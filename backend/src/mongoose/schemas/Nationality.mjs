import mongoose from "mongoose";
 
const nationalitySchema=new mongoose.Schema({
  name:mongoose.Schema.Types.String}
);

 export const Nationality=mongoose.model("Nationality",nationalitySchema);

