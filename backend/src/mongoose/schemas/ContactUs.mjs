import mongoose from "mongoose";
 
const ContactUsSchema=new mongoose.Schema({
  
    
  FullName:mongoose.Schema.Types.String,
  Email:mongoose.Schema.Types.String,
  Mobile:mongoose.Schema.Types.Number,
  Status:mongoose.Schema.Types.String,
  Message:mongoose.Schema.Types.String
}
);
export const ContactUs=mongoose.model("ContactUs",ContactUsSchema);