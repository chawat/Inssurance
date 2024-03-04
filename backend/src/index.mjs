import express from 'express';
import mongoose from 'mongoose';
import {Personal} from '../src/mongoose/schemas/personal.mjs';
import {PersonalInsurance} from '../src/mongoose/schemas/perosonalInsurance.mjs';
import {TermLifeInsurance} from '../src/mongoose/schemas/termLife.mjs';
import {MotorInsurance} from '../src/mongoose/schemas/motorInsurance.mjs';
import {HouseInsurance} from '../src/mongoose/schemas/houseInsurance.mjs';
import {TravelInsurance}  from '../src/mongoose/schemas/travelInsurance.mjs';
import {HealthCareInsurance} from '../src/mongoose/schemas/healthcareInsurance.mjs';
import {BusinessInsurance} from '../src/mongoose/schemas/business.mjs';
import {ContactUs} from '../src/mongoose/schemas/ContactUs.mjs';
import cors from  "cors";



const app=express();
app.use(cors());
app.use(express.json());
const url = "mongodb://localhost:27017/insurance";
// personal.mjs


const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

mongoose.connect(url).then((ans) => { 
    console.log("Connected Successful") 
}).catch((err) => { 
    console.log("Error in the Connection") 
});
//retrieve nationalities
app.get("/nationalities",async (request,response)=>{
        console.log(request);
        
         try{
              const nationalities=await mongoose.connection.db.collection('Nationality').find({},{name:1}).toArray();
             const names=nationalities.map(nationality=>nationality.name)
             response.json(names);
         }
     catch(err){
      response.status(500).json({message:err.message});
     }
})
//retrieve year 
app.get("/year",async (request,response)=>{
    console.log(request);
    
     try{
          const years=await mongoose.connection.db.collection('Year').find({},{year:1}).toArray();
         const Years=years.map(year=>year.year)
         response.json(Years);
     }
 catch(err){
  response.status(500).json({message:err.message});
 }
})
//input client info
app.post("/personal",async (request,response)=>{
     const {body}=request;
     const  Newpersonal =new Personal(body);
    try{
         const savedPersonal= await Newpersonal.save();
         return response.status(201).send(savedPersonal);
    }

    catch(err){
      console.log(err);
      return response.sendStatus(400);
     }
})
//post a personalinsurance
app.post("/personalinsurance",async (request,response)=>{
    const {body}=request;
    const  NewpersonalInsurance =new PersonalInsurance(body);
   try{
        const savedPersonalInsurance= await NewpersonalInsurance.save();
        return response.status(201).send(savedPersonalInsurance);
   }
   catch(err){
     console.log(err);
     return response.sendStatus(400);
    }
})
//post termlifeinsurance
app.post("/termlifeinsurance",async (request,response)=>{
    const {body}=request;
    const  NewtermLifeInsurance =new TermLifeInsurance(body);
   try{
        const savedtermLifeInsurance= await NewtermLifeInsurance.save();
        return response.status(201).send(savedtermLifeInsurance);
   }
   catch(err){
     console.log(err);
     return response.sendStatus(400);
    }
})
//post motorinsurance
app.post("/motorinsurance",async (request,response)=>{
    const {body}=request;
    const  NewmotorInsurance =new MotorInsurance(body);
   try{
        const savedMotorInsurance= await NewmotorInsurance.save();
        return response.status(201).send(savedMotorInsurance);
   }
   catch(err){
     console.log(err);
     return response.sendStatus(400);
    }
})


//house insurance
app.post("/houseinsurance",async (request,response)=>{
    const {body}=request;
    const  NewhouseInsurance =new HouseInsurance(body);
   try{
        const savedhouseInsurance= await NewhouseInsurance.save();
        return response.status(201).send(savedhouseInsurance);
   }
   catch(err){
     console.log(err);
     return response.sendStatus(400);
    }
})

//travel insurance
app.post("/travelinsurance",async (request,response)=>{
    const {body}=request;
    const  NewtravelInsurance =new TravelInsurance(body);
   try{
        const savedtravelInsurance= await NewtravelInsurance.save();
        return response.status(201).send(savedtravelInsurance);
   }
   catch(err){
     console.log(err);
     return response.sendStatus(400);
    }
})

//healthcare insurance
app.post("/healthcareinsurance",async (request,response)=>{
    const {body}=request;
    const  NewhealthcareInsurance =new HealthCareInsurance(body);
   try{
        const savedhealthcareInsurance= await NewhealthcareInsurance.save();
        return response.status(201).send(savedhealthcareInsurance);
   }
   catch(err){
     console.log(err);
     return response.sendStatus(400);
    }
})
//posting business insurance
app.post("/businessinsurance",async (request,response)=>{
    const {body}=request;
    const  NewbusinessInsurance =new BusinessInsurance(body);
   try{
        const savedbusinessInsurance= await NewbusinessInsurance.save();
        return response.status(201).send(savedbusinessInsurance);
   }
   catch(err){
     console.log(err);
     return response.sendStatus(400);
    }
})
//post contact message
app.post("/contactus",async (request,response)=>{
    const {body}=request;
    const  Newcontactus=new ContactUs(body);
   try{
        const savedcontactus= await Newcontactus.save();
        return response.status(201).send(savedcontactus);
   }
   catch(err){
     console.log(err);
     return response.sendStatus(400);
    }
})

