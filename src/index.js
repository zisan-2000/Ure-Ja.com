import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { ContactUsComp } from "../../components/ContactUsComp";
// import { FooterComp } from "../../components/FooterComp";
// import { HeaderComp } from "../../components/HeaderComp";
// import { LowestFareComp } from "../../components/LowestFareComp";
// import { ProfessionalExpComp } from "../../components/ProfessionalExpComp";
// import { ServicesComp } from "../../components/ServicesComp";
// import { WorldTourComp } from "../../components/WorlTourComp";
// import SearchHome from "../../components/SearchHome";
// import Zisan from "../../components/SearchZisan";
// import HotelBookingForm from "../../components/HotelBookingForm";
// import PostFlight from "./components/PostFlight";

// import FlightData from "../../components/SearchOffers";

// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
// const myrouter=(
//   <Router>
//     <div>
//         <ul>
//           <Link to="/">হোম</Link>
//           <Link to="/">আমাদের সম্পর্কে</Link>
//           <Link to="/">বুকিং শর্তাবলী</Link>
//           <Link to="/">ফ্লাইট</Link>
//           <Link to="/">হোটেল</Link>
//           <Link to="/">যোগাযোগ করুন</Link>
//           <Link to="/PostFlight">ফ্লাইট খুঁজুন</Link>
//         </ul>

//         <Route path="/" Component={App} />
//         <Route path="/" Component={App} />
//         <Route path="/" Component={App} />
//         <Route path="/" Component={App} />
//         <Route path="/" Component={App} />
//         <Route path="/" Component={App} />
//         <Route path="/PostFlight" Component={PostFlight} />
//     </div>
//   </Router>
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <App />
  </Router>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
