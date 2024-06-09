import React from "react";
import { ContactUsComp } from "../../components/ContactUsComp";
import { FooterComp } from "../../components/FooterComp";
import { HeaderComp } from "../../components/HeaderComp";
import { LowestFareComp } from "../../components/LowestFareComp";
import { ProfessionalExpComp } from "../../components/ProfessionalExpComp";
import { ServicesComp } from "../../components/ServicesComp";
import { WorldTourComp } from "../../components/WorlTourComp";
import SearchHome from "../../components/SearchHome";
import Zisan from "../../components/SearchZisan";
import HotelBookingForm from "../../components/HotelBookingForm";
import PostFlight from "../../components/PostFlight";
import FlightData from "../../components/SearchOffers";
import AmadeusAPIEx from "../../components/AmadeusAPIEx";
// import FlightOffersComponent from "../../components/FetchFlight";
// import { Route, Link, BrowserRouter as Router } from '../node_modules/react-router-dom';
import ImageGallery from "../../components/ImageGallery";
import FlightDestinations from "../../components/FlightDestinations";
import FAQ from "../../components/Faq";


export const LandingPage = () => {
  return (
    <div className="w-screen h-screen">
      
      <ContactUsComp />
      <HeaderComp />
      <ServicesComp />
      <LowestFareComp /> 
      <ProfessionalExpComp /> 
      <WorldTourComp />
      <FooterComp />
      <PostFlight/>
      {/* <SearchHome /> */}
      <Zisan/>
      {/* <Zisan1/> */}

      {/* <HotelBookingForm/> */}
      
      
      <FlightData/>
      {/* <AmadeusAPIEx/> */}

      {/* <FlightOffersComponent/> */}
      <ImageGallery/>
      <FlightDestinations/>
      <FAQ/>
      
    </div>
  );
};
