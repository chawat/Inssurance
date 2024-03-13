import mongoose from "mongoose";
 
const nbquoteviews=new mongoose.Schema({
  personalacc:mongoose.Schema.Types.Number,
  healthcare:mongoose.Schema.Types.Number,
  motor:mongoose.Schema.Types.Number,
  house:mongoose.Schema.Types.Number,
  travel:mongoose.Schema.Types.Number,
  termlife:mongoose.Schema.Types.Number,

}
);
export const Nbquoteviews=mongoose.model("quoteviews",nbquoteviews);