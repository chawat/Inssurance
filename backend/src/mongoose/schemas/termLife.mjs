import mongoose from "mongoose";
 
const termLifeSchema=new mongoose.Schema({
  
    IdPersonal: {
        type: mongoose.Schema.Types.ObjectId, // Referencing Personal schema
        ref: "Personal" // Referencing the "Personal" model
      },
  Currency: mongoose.Schema.Types.String,
  SumInsured: mongoose.Schema.Types.Number,
  PolicyDuration: mongoose.Schema.Types.String,
  BasicCover: mongoose.Schema.Types.String,
  OptionalCover: [mongoose.Schema.Types.String],

}
);
export const TermLifeInsurance=mongoose.model("TermLifeInsurance",termLifeSchema);
