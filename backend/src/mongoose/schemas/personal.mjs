import mongoose from "mongoose";
 
const personalSchema=new mongoose.Schema({
  
  FirstName: mongoose.Schema.Types.String,
  LastName: mongoose.Schema.Types.String,
  FatherName: mongoose.Schema.Types.String,
  Email: mongoose.Schema.Types.String,
  LandLine: mongoose.Schema.Types.Number,
  Mobile: mongoose.Schema.Types.Number,
  DateOfBirth:mongoose.Schema.Types.Date,
  Occupation: mongoose.Schema.Types.String


}
);
export const Personal=mongoose.model("Personal",personalSchema);
