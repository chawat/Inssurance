import mongoose from "mongoose";
 
const travelInsuranceSchema=new mongoose.Schema({
  personal:mongoose.Schema.Types.ObjectId,

  Destination: mongoose.Schema.Types.String,
  CountryOfDeparture:mongoose.Schema.Types.String,
  ContactOfPersonEmergency: mongoose.Schema.Types.Number,
  Status:mongoose.Schema.Types.String,
  ContactOfPerson: mongoose.Schema.Types.Number,
  OptionalCover: [mongoose.Schema.Types.String],
  PlanType:mongoose.Schema.Types.String,
  GeographicalZone:mongoose.Schema.Types.String,
  TripDuration:mongoose.Schema.Types.String,
  TABLEOFINSUREDPERSONS:[{
        FullName:mongoose.Schema.Types.String,
        Relation:mongoose.Schema.Types.String,
        YearOfBirth:mongoose.Schema.Types.String,
  }]
}
);
export const TravelInsurance=mongoose.model("TravelInsurance",travelInsuranceSchema);
