// AmadeusAPI.js
import axios from 'axios';

const API_KEY = 'd0e64LqY4WYl0De6O0xfc5nq2Lp82kdu';
const BASE_URL = 'https://api.amadeus.com/v1';

const AmadeusAPI = {
  searchFlights: async (params) => {
    try {
      const response = await axios.get(`${BASE_URL}/shopping/flight-offers`, {
        params: {
          ...params,
          apikey: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching flights:', error);
      throw error;
    }
  },
};

export default AmadeusAPI;
