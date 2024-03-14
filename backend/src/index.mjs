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
import {Admin} from '../src/mongoose/schemas/admin.mjs';
import {Nbviews} from '../src/mongoose/schemas/views.mjs';
import { Nbquoteviews } from './mongoose/schemas/quoteview.mjs';

import cors from  "cors";
import bcrypt from "bcrypt"



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


//admin schema
app.post("/admin", async (request, response) => {
    const { body } = request;
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(body.Password, 10);

        // Create a new admin with the hashed password
        const newAdmin = new Admin({
            Username: body.Username,
            Password: hashedPassword
        });

        // Save the admin to the database
        const savedAdmin = await newAdmin.save();
        return response.status(201).send(savedAdmin);
    } catch (err) {
        console.error("Error saving admin:", err);
        return response.sendStatus(400);
    }
});


//login admin
app.post('/login', async (req, res) => {
    const { Username, Password } = req.body;

    try {
        const admin = await Admin.findOne({ Username });
        if (!admin) {
            return res.status(401).json({ success: false, message: 'Invalid username or password.' });
        }

        const passwordMatch = await bcrypt.compare(Password, admin.Password); // Await the result of bcrypt.compare()
        if (passwordMatch) {
            return res.json({ success: true, message: 'Login successful.' });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid password.' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ success: false, message: 'Error logging in.', error: error.message });
    }
});


//get housequote

app.get('/api/getHouse', async (req, res) => {
    try {
        // Query all documents from the Ingredient collection
        const house = await HouseInsurance.find();
        res.send(house);
    } catch (error) {
        console.error('Error fetching quote:', error);
        res.status(500).json({ success: false, message: 'Error fetching ingredients.', error: error.message });
    }
});




//get all personal data

app.get('/api/getAllInsuranceWithPersonalData', async (req, res) => {
    try {
        const houseData = await HouseInsurance.aggregate([
            {
                $lookup: {
                    from: 'personals',
                    localField: 'personal',
                    foreignField: '_id',
                    as: 'matchedPersonals'
                }
            }
        ]);

        const motorData = await MotorInsurance.aggregate([
            {
                $lookup: {
                    from: 'personals',
                    localField: 'personal',
                    foreignField: '_id',
                    as: 'matchedPersonals'
                }
            }
        ]);

        const travelData = await TravelInsurance.aggregate([
            {
                $lookup: {
                    from: 'personals',
                    localField: 'personal',
                    foreignField: '_id',
                    as: 'matchedPersonals'
                }
            }
        ]);





        const personalaccData = await PersonalInsurance.aggregate([
            {
                $lookup: {
                    from: 'personals',
                    localField: 'personal',
                    foreignField: '_id',
                    as: 'matchedPersonals'
                }
            }
        ]);

        const healthcareData = await HealthCareInsurance.aggregate([
            {
                $lookup: {
                    from: 'personals',
                    localField: 'personal',
                    foreignField: '_id',
                    as: 'matchedPersonals'
                }
            }
        ]);

        const termlifeData = await TermLifeInsurance.aggregate([
            {
                $lookup: {
                    from: 'personals',
                    localField: 'personal',
                    foreignField: '_id',
                    as: 'matchedPersonals'
                }
            }
        ]);

        res.json({ houseData, motorData, travelData,termlifeData,personalaccData,healthcareData });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ success: false, message: 'Error fetching data.', error: error.message });
    }
});

//get business data
app.get('/api/getbusinessdata', async (req, res) => {
    try {
        // Query all documents from the business collection
        const business = await BusinessInsurance.find();
        res.send(business);
    } catch (error) {
        console.error('Error fetching quote:', error);
        res.status(500).json({ success: false, message: 'Error fetching data.', error: error.message });
    }
});
//add views/
/*app.post("/quoteviews",async (request,response)=>{
    const {body}=request;
    const  sviews =new Nbquoteviews(body);
   try{
        const nbquotesviews= await sviews.save();
        return response.status(201).send(nbquotesviews);
   }

   catch(err){
     console.log(err);
     return response.sendStatus(400);
    }
}) */

//get messages in contact us
app.get('/api/messages', async (req, res) => {
    try {
        // Query all documents from the contact us collection
        const contact = await ContactUs.find();
        res.send(contact);
    } catch (error) {
        console.error('Error fetching quote:', error);
        res.status(500).json({ success: false, message: 'Error fetching data.', error: error.message });
    }
});
//add view
app.put('/view/:fieldName', async (req, res) => {
    const { fieldName } = req.params; // Extract the field name from the request parameters
  
    try {
      // Increment the specific field in the views collection by 1
      const result = await Nbviews.findOneAndUpdate({}, { $inc: { [fieldName]: 1 } }, { new: true });
  
      if (result) {
        res.status(200).json({ success: true, message: `Field ${fieldName} incremented successfully`, newValue: result[fieldName] });
      } else {
        res.status(404).json({ success: false, message: `Field ${fieldName} not found` });
      }
    } catch (error) {
      console.error('Error incrementing field:', error);
      res.status(500).json({ success: false, message: 'Error incrementing field', error: error.message });
    }
  });
  //get views 
  app.get('/api/getviews', async (req, res) => {
    try {
      const statistics = await Nbviews.findOne({}, { _id: 0 }); // Exclude the _id field from the result
      res.json(statistics);
    } catch (error) {
      console.error('Error fetching statistics from MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  //personal quote view incrementation
  app.put('/quoteview/:fieldName', async (req, res) => {
    const { fieldName } = req.params; // Extract the field name from the request parameters
  
    try {
      // Increment the specific field in the views collection by 1
      const result = await Nbquoteviews.findOneAndUpdate({}, { $inc: { [fieldName]: 1 } }, { new: true });
  
      if (result) {
        res.status(200).json({ success: true, message: `Field ${fieldName} incremented successfully`, newValue: result[fieldName] });
      } else {
        res.status(404).json({ success: false, message: `Field ${fieldName} not found` });
      }
    } catch (error) {
      console.error('Error incrementing field:', error);
      res.status(500).json({ success: false, message: 'Error incrementing field', error: error.message });
    }
  });
  //get quoteviews
  app.get('/api/getquoteviews', async (req, res) => {
    try {
      const statistics = await Nbquoteviews.findOne({}, { _id: 0 }); // Exclude the _id field from the result
      res.json(statistics);
    } catch (error) {
      console.error('Error fetching statistics from MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  //change the status of bus
  app.put('/api/businessinsurance/updatestatus/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find the business insurance record by its ID
      const insuranceRecord = await BusinessInsurance.findById(id);
  
      if (!insuranceRecord) {
        return res.status(404).json({ message: 'Insurance record not found' });
      }
  
      // Update the status from 'pending' to 'done'
      insuranceRecord.Status = 'done';
  
      // Save the updated record
      await insuranceRecord.save();
  
      return res.json({ message: 'Status updated successfully', insuranceRecord });
    } catch (error) {
      console.error('Error updating status:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  //data of bus when the status is Pending
  app.get('/api/getbusinessdatapending', async (req, res) => {
    const status = 'Pending'; // Set the status to 'pending'

    try {
        // Query documents from the business collection with the status 'pending'
        const business = await BusinessInsurance.find({ Status: status });
        res.send(business);
    } catch (error) {
        console.error('Error fetching quote:', error);
        res.status(500).json({ success: false, message: 'Error fetching data.', error: error.message });
    }
});

//change the status of personal 
app.put('/api/insurance/:schema/updatestatus/:id', async (req, res) => {
    const { schema, id } = req.params;
  
    try {
        let insuranceRecord;
        switch(schema) {
            case 'personalacc':
                insuranceRecord = await PersonalInsurance.findById(id);
                break;
            case 'termlife':
                insuranceRecord = await TermLifeInsurance.findById(id);
                break;
            case 'motor':
                insuranceRecord = await MotorInsurance.findById(id);
                break;
            case 'house':
                insuranceRecord = await HouseInsurance.findById(id);
                break;
            case 'travel':
                insuranceRecord = await TravelInsurance.findById(id);
                break;
            case 'healthcare':
                insuranceRecord = await HealthCareInsurance.findById(id);
                break;
            default:
                return res.status(404).json({ message: 'Schema not found' });
        }
  
        if (!insuranceRecord) {
            return res.status(404).json({ message: 'Insurance record not found' });
        }
  
        insuranceRecord.Status = 'done';
        await insuranceRecord.save();
  
        return res.json({ message: 'Status updated successfully', insuranceRecord });
    } catch (error) {
        console.error('Error updating status:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});


//get all the insurance quote with status Pending
app.get('/api/getAllPendingInsuranceWithPersonalData', async (req, res) => {
    try {
        const houseData = await HouseInsurance.aggregate([
            {
                $lookup: {
                    from: 'personals',
                    localField: 'personal',
                    foreignField: '_id',
                    as: 'matchedPersonals'
                }
            },
            {
                $match: {
                    Status: 'Pending'
                }
            }
        ]);

        const motorData = await MotorInsurance.aggregate([
            {
                $lookup: {
                    from: 'personals',
                    localField: 'personal',
                    foreignField: '_id',
                    as: 'matchedPersonals'
                }
            },
            {
                $match: {
                    Status: 'Pending'
                }
            }
        ]);

        const travelData = await TravelInsurance.aggregate([
            {
                $lookup: {
                    from: 'personals',
                    localField: 'personal',
                    foreignField: '_id',
                    as: 'matchedPersonals'
                }
            },
            {
                $match: {
                    Status: 'Pending'
                }
            }
        ]);

        const personalaccData = await PersonalInsurance.aggregate([
            {
                $lookup: {
                    from: 'personals',
                    localField: 'personal',
                    foreignField: '_id',
                    as: 'matchedPersonals'
                }
            },
            {
                $match: {
                    Status: 'Pending'
                }
            }
        ]);

        const healthcareData = await HealthCareInsurance.aggregate([
            {
                $lookup: {
                    from: 'personals',
                    localField: 'personal',
                    foreignField: '_id',
                    as: 'matchedPersonals'
                }
            },
            {
                $match: {
                    Status: 'Pending'
                }
            }
        ]);

        const termlifeData = await TermLifeInsurance.aggregate([
            {
                $lookup: {
                    from: 'personals',
                    localField: 'personal',
                    foreignField: '_id',
                    as: 'matchedPersonals'
                }
            },
            {
                $match: {
                    Status: 'Pending'
                }
            }
        ]);

        res.json({ houseData, motorData, travelData, termlifeData, personalaccData, healthcareData });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ success: false, message: 'Error fetching data.', error: error.message });
    }
});
