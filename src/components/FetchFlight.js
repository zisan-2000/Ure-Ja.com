// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FlightOffersComponent = () => {
//     const [flightOffers, setFlightOffers] = useState([]);
//     const [metrics, setMetrics] = useState(null);

//     useEffect(() => {
//         // Fetch flight offers
//         axios.get('http://127.0.0.1:8000/api/flight_offers/')
//             .then(response => setFlightOffers(response.data))
//             .catch(error => console.error('Error fetching flight offers:', error));

//         // Fetch metrics
//         axios.get('http://127.0.0.1:8000/api/metrics/')
//             .then(response => setMetrics(response.data))
//             .catch(error => console.error('Error fetching metrics:', error));
//     }, []);

//     return (
//         <div>
//             <h3 className="login-heading mb-4 mt-4 pl-3">{origin} &#x2708; {destination} <br/>{departure_date}
//                 {return_date && <span className="text-info">&#10594;&#10596; {return_date}</span>}</h3>
//             <div className="modal-body row">
//                 <div className="col-md-5 offset-1">
//                     <h4 className="login-heading mb-4 text-left">FLIGHT OFFERS</h4>
//                     {flightOffers.map((r, index) => (
//                         <div key={index} className="card mb-6 text-center" style={{ maxWidth: '40rem' }}>
//                             {/* Render flight offer data */}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="col-md-5">
//                     <h4 className="login-heading mb-4 text-left">PRICE ANALYSIS</h4>
//                     {metrics ? (
//                         <div>
//                             <p>The cheapest available flight is <span className="text-info">{is_good_deal}</span></p>
//                             {/* Render metrics data */}
//                         </div>
//                     ) : (
//                         <div>
//                             <p>We don't have price metrics for this itinerary.</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default FlightOffersComponent;
