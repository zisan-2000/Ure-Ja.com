import React, { useState, useEffect } from 'react';

function FlightData() {
    const [flightOffers, setFlightOffers] = useState([]);
    const [metrics, setMetrics] = useState({});
    const [cheapestFlight, setCheapestFlight] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [offersPerPage] = useState(6); // Number of offers per page

    useEffect(() => {
        // Fetch flight offers
        fetch('http://127.0.0.1:8000/api/flight_offers/')
            .then(response => response.json())
            .then(data => setFlightOffers(data))
            .catch(error => console.error('Error fetching flight offers:', error));

        // Fetch metrics
        fetch('http://127.0.0.1:8000/api/metrics/')
            .then(response => response.json())
            .then(data => setMetrics(data))
            .catch(error => console.error('Error fetching metrics:', error));

        // Fetch cheapest flight
        fetch('http://127.0.0.1:8000/api/cheapest_flight/')
            .then(response => response.json())
            .then(data => setCheapestFlight(data.cheapest_flight))
            .catch(error => console.error('Error fetching cheapest flight:', error));
    }, []);

    // Logic to get current offers
    const indexOfLastOffer = currentPage * offersPerPage;
    const indexOfFirstOffer = indexOfLastOffer - offersPerPage;
    const currentOffers = flightOffers.slice(indexOfFirstOffer, indexOfLastOffer);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Previous page handler
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Next page handler
    const handleNextPage = () => {
        if (currentPage < Math.ceil(flightOffers.length / offersPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="text-center border rounded-md p-4">
                <h2 className="text-2xl font-semibold mb-4">Flight Offers</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentOffers.map((offer, index) => (
                    <div key={index} className="rounded-lg shadow-md overflow-hidden bg-white">
                        <img src={offer.airline_logo} alt={offer.airline_name} className="w-full h-32 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{offer.airline_name}</h3>
                            <p className="text-gray-600 mb-4">{offer.departure} to {offer.destination}</p>
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-lg font-semibold text-green-600">${offer.price}</p>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Book Now</button>
                            </div>
                            <div className="text-sm text-gray-600">
                                <p>Departure Date: {offer.departure_date}</p>
                                <p>Return Date: {offer.return_date}</p>
                                <p>{offer.travel_class}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-4 flex justify-center">
                <button onClick={handlePreviousPage} className={`mx-1 px-3 py-1 bg-blue-500 text-white rounded ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`} disabled={currentPage === 1}>Previous</button>
                {Array.from({ length: Math.min(3, Math.ceil(flightOffers.length / offersPerPage)) }, (_, i) => (
                    <button key={i} onClick={() => paginate(i + 1)} className={`mx-1 px-3 py-1 bg-blue-500 text-white rounded ${currentPage === i + 1 ? 'bg-blue-700' : ''}`}>
                        {i + 1}
                    </button>
                ))}
                <button onClick={handleNextPage} className={`mx-1 px-3 py-1 bg-blue-500 text-white rounded ${currentPage === Math.ceil(flightOffers.length / offersPerPage) ? 'cursor-not-allowed opacity-50' : ''}`} disabled={currentPage === Math.ceil(flightOffers.length / offersPerPage)}>Next</button>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-2xl font-semibold mb-4">Metrics</h2>
                    <ul className="text-gray-700">
                        <li className="mb-2">Minimum Price: {metrics.min}</li>
                        <li className="mb-2">First Quartile: {metrics.first}</li>
                        <li className="mb-2">Median Price: {metrics.median}</li>
                        <li className="mb-2">Third Quartile: {metrics.third}</li>
                        <li className="mb-2">Maximum Price: {metrics.max}</li>
                    </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-2xl font-semibold mb-4">Cheapest Flight</h2>
                    <p className="text-3xl font-bold text-green-500">${cheapestFlight}</p>
                    <p className="text-gray-700 text-sm">Book now and save!</p>
                </div>
            </div>
        </div>
    );
}

export default FlightData;
