// App.js
import React, { useEffect, useState } from 'react';
import AmadeusAPI from './AmadeusAPI';

function AmadeusAPIEx() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    async function fetchFlights() {
      try {
        const params = {
          originLocationCode: 'NYC',
          destinationLocationCode: 'LAX',
          departureDate: '2024-04-25',
          adults: 1,
        };
        const data = await AmadeusAPI.searchFlights(params);
        setFlights(data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    }

    fetchFlights();
  }, []);

  return (
    <div>
      <h1>Flights</h1>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>{flight}</li>
        ))}
      </ul>
    </div>
  );
}

export default AmadeusAPIEx;
