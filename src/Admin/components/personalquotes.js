import React, { useState, useEffect } from "react";
import axios from 'axios';

const PersonalQuotes = () => {
  const [quotes, setQuotes] = useState({
    houseData: [],
    motorData: [],
    travelData: [],
    termlifeData: [],
    personalaccData: [],
    healthcareData: []
  });

  useEffect(() => {
    // Fetch quotes data from your backend API
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/getAllInsuranceWithPersonalData'); // Replace with your API endpoint
        console.log('Response data:', response.data); // Log response data for debugging
        setQuotes(response.data); // Set quotes state with the fetched data
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, []);

  console.log('Quotes state:', quotes); // Log quotes state for debugging

  return (
    <div>
      <h1>Insurance Quotes</h1>
      
      <h2>House Insurance</h2>
      <ul>
        {quotes.houseData.map((quote, index) => (
          <li key={index}>
             <ul>
              {quote.matchedPersonals.map((personal, personalIndex) => (
                <li key={personalIndex}>
                  <div>First Name: {personal.FirstName}</div>
                  <div>Last Name: {personal.LastName}</div>
                  <div>Father Name: {personal.FatherName}</div>
                  <div>Email: {personal.Email}</div>
                  <div>Landline: {personal.LandLine}</div>
                  <div>Mobile: {personal.Mobile}</div>
                  <div>Date of birth: {personal.DateOfBirth}</div>
                  <div>Occupation: {personal.Occupation}</div>
                </li>
              ))}
            </ul>
            <div>Construction Value: {quote.ConstructionValue}</div>
            <div>Content Value: {quote.ContentValue}</div>
            <div>Application Status: {quote.ApplicationStatus}</div>
            <div>Residence Status: {quote.ResidenceStatus}</div>
            <div>
              Basic Cover:
              <ul>
                {quote.BasicCover.map((cover, coverIndex) => (
                  <li key={coverIndex}>{cover}</li>
                ))}
              </ul>
            </div>
            <div>
              Optional Cover:
              <ul>
                {quote.OptionalCover.map((cover, coverIndex) => (
                  <li key={coverIndex}>{cover}</li>
                ))}
              </ul>
              <button>done!</button>
            </div>
          </li>
        ))}
      </ul>
      
      <h2>Motor Insurance</h2>
      <ul>
        {quotes.motorData.map((quote, index) => (
          <li key={index}>
             <ul>
              {quote.matchedPersonals.map((personal, personalIndex) => (
                <li key={personalIndex}>
                  <div>First Name: {personal.FirstName}</div>
                  <div>Last Name: {personal.LastName}</div>
                  <div>Father Name: {personal.FatherName}</div>
                  <div>Email: {personal.Email}</div>
                  <div>Landline: {personal.LandLine}</div>
                  <div>Mobile: {personal.Mobile}</div>
                  <div>Date of birth: {personal.DateOfBirth}</div>
                  <div>Occupation: {personal.Occupation}</div>
                </li>
              ))}
            </ul>
            <div>Plan Detail: {quote.PlanDetail}</div>
          </li>
        ))}
        <button>done!</button>
      </ul>
      
      <h2>Travel Insurance</h2>
<ul>
  {quotes.travelData.map((quote, index) => (
    <li key={index}>
       <ul>
        {quote.matchedPersonals.map((personal, personalIndex) => (
          <li key={personalIndex}>
            <div>First Name: {personal.FirstName}</div>
            <div>Last Name: {personal.LastName}</div>
            <div>Father Name: {personal.FatherName}</div>
            <div>Email: {personal.Email}</div>
            <div>LandLine: {personal.LandLine}</div>
            <div>Mobile: {personal.Mobile}</div>
            <div>Date of Birth: {personal.DateOfBirth}</div>
            <div>Occupation: {personal.Occupation}</div>
          </li>
        ))}
      </ul>
      <div>Destination: {quote.Destination}</div>
      <div>Country of Departure: {quote.CountryOfDeparture}</div>
      <div>Contact of Person Emergency: {quote.ContactOfPersonEmergency}</div>
      <div>Contact of Person: {quote.ContactOfPerson}</div>
      {quote.OptionalCover && (
        <div>
          Optional Cover:
          <ul>
            {quote.OptionalCover.map((cover, coverIndex) => (
              <li key={coverIndex}>{cover}</li>
            ))}
          </ul>
        </div>
      )}
      <div>Plan Type: {quote.PlanType}</div>
      <div>Geographical Zone: {quote.GeographicalZone}</div>
      <div>Trip Duration: {quote.TripDuration}</div>
      {quote.TABLEOFINSUREDPERSONS && (
        <div>
          Table of Insured Persons:
          <ul>
            {quote.TABLEOFINSUREDPERSONS.map((person, personIndex) => (
              <li key={personIndex}>
                {/* Render fields of the TABLEOFINSUREDPERSONS object */}
              </li>
            ))}
          </ul>
          <button>done!</button>
        </div>
      )}
      
    </li>
  ))}
</ul>


<h2>Term Life Insurance</h2>
<ul>
  {quotes.termlifeData.map((quote, index) => (
    <li key={index}>
       <ul>
        {quote.matchedPersonals.map((personal, personalIndex) => (
          <li key={personalIndex}>
            <div>First Name: {personal.FirstName}</div>
            <div>Last Name: {personal.LastName}</div>
            <div>Father Name: {personal.FatherName}</div>
            <div>Email: {personal.Email}</div>
            <div>LandLine: {personal.LandLine}</div>
            <div>Mobile: {personal.Mobile}</div>
            <div>Date of Birth: {personal.DateOfBirth}</div>
            <div>Occupation: {personal.Occupation}</div>
          </li>
        ))}
      </ul>
      <div>Currency: {quote.Currency}</div>
      <div>Sum Insured: {quote.SumInsured}</div>
      <div>Policy Duration: {quote.PolicyDuration}</div>
      <div>Basic Cover: {quote.BasicCover}</div>
      {quote.OptionalCover && (
        <div>
          Optional Cover:
          <ul>
            {quote.OptionalCover.map((cover, coverIndex) => (
              <li key={coverIndex}>{cover}</li>
            ))}
          </ul>
          <button>done!</button>
        </div>
       
      )}
     
     
    </li>
  ))}
</ul>


<h2>Personal Accident Insurance</h2>
<ul>
  {quotes.personalaccData.map((quote, index) => (
    <li key={index}>
      <ul>
        {quote.matchedPersonals.map((personal, personalIndex) => (
          <li key={personalIndex}>
            <div>First Name: {personal.FirstName}</div>
            <div>Last Name: {personal.LastName}</div>
            <div>Father Name: {personal.FatherName}</div>
            <div>Email: {personal.Email}</div>
            <div>LandLine: {personal.LandLine}</div>
            <div>Mobile: {personal.Mobile}</div>
            <div>Date of Birth: {personal.DateOfBirth}</div>
            <div>Occupation: {personal.Occupation}</div>
          </li>
        ))}
      </ul>
      <div>Country of Residence: {quote.CountryOfResidence}</div>
      <div>Currency: {quote.Currency}</div>
      <div>Sum Insured: {quote.SumInsured}</div>
      <div>Basic Cover: {quote.BasicCover}</div>
      {quote.OptionalCover && (
        <div>
          Optional Cover:
          <ul>
            {quote.OptionalCover.map((cover, coverIndex) => (
              <li key={coverIndex}>{cover}</li>
            ))}
          </ul>
          <button>done!</button>
        </div>
      )}
      
      
    </li>
  ))}
</ul>


<h2>Healthcare Insurance</h2>
<ul>
  {quotes.healthcareData.map((quote, index) => (
    <li key={index}>
      <ul>
        {quote.matchedPersonals.map((personal, personalIndex) => (
          <li key={personalIndex}>
            <div>First Name: {personal.FirstName}</div>
            <div>Last Name: {personal.LastName}</div>
            <div>Father Name: {personal.FatherName}</div>
            <div>Email: {personal.Email}</div>
            <div>LandLine: {personal.LandLine}</div>
            <div>Mobile: {personal.Mobile}</div>
            <div>Date of Birth: {personal.DateOfBirth}</div>
            <div>Occupation: {personal.Occupation}</div>
          </li>
        ))}
      </ul>
      <div>Hospital Network: {quote.HospitalNetwork}</div>
      <div>Hospitalization Class: {quote.HospitalizationClass}</div>
      <div>Cover Type: {quote.Covertype}</div>
      {quote.AdditionalCover && (
        <div>
          Additional Cover:
          <ul>
            {quote.AdditionalCover.map((cover, coverIndex) => (
              <li key={coverIndex}>{cover}</li>
            ))}
          </ul>
        </div>
      )}
      {quote.OptionalCover && (
        <div>
          Optional Cover:
          <ul>
            {quote.OptionalCover.map((cover, coverIndex) => (
              <li key={coverIndex}>{cover}</li>
            ))}
          </ul>
          <button>done!</button>
        </div>
      )}
      
     
    </li>
  ))}
</ul>

      
    </div>
  );
}

export default PersonalQuotes ;
