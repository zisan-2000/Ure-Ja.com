import React, { useEffect, useState } from 'react';

function Zisan() {
  const [data, setData] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hotelsPerPage] = useState(8); // Number of hotels to display per page

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/get_zisan/');
      const jsonData = await response.json();

      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = data ? Object.values(data).slice(indexOfFirstHotel, indexOfLastHotel) : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(Object.values(data).length / hotelsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const togglePopup = (hotel) => {
    setSelectedHotel(hotel);
    setShowPopup(!showPopup);
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Hotel Offers</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentHotels.map((hotel, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <img
                className="w-full h-56 object-cover"
                src={`https://via.placeholder.com/800x400?text=${hotel.hotel.name}`}
                alt={hotel.hotel.name}
              />
              <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-3 rounded-bl-lg">
                {hotel.hotel.rating ? (
                  <span>{hotel.hotel.rating} Stars</span>
                ) : (
                  <span>Not Rated</span>
                )}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{hotel.hotel.name}</h2>
              <p className="text-gray-600 mb-2">Location: {hotel.hotel.cityCode}</p>
              <p className="text-gray-600 mb-2">Check-in: {hotel.offers[0].checkInDate}</p>
              <p className="text-gray-600 mb-2">Check-out: {hotel.offers[0].checkOutDate}</p>
              <p className="text-gray-600 mb-2">Price: {hotel.offers[0].price.total} {hotel.offers[0].price.currency}</p>
              <a href={hotel.offers[0].self} className="text-blue-500 hover:text-blue-700">View Details</a>
              <button onClick={() => togglePopup(hotel)} className="absolute bottom-4 right-4 bg-blue-300 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-500 focus:outline-none">Show Room</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {data && (
          <ul className="flex list-none">
            <li>
              <button
                className={`px-3 py-1 mx-1 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-700' : 'bg-blue-500 text-white'}`}
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: Math.ceil(Object.values(data).length / hotelsPerPage) }, (_, i) => i + 1).map((number) => (
              <li key={number}>
                <button
                  className={`px-3 py-1 mx-1 rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              </li>
            ))}
            <li>
              <button
                className={`px-3 py-1 mx-1 rounded ${currentPage === Math.ceil(Object.values(data).length / hotelsPerPage) ? 'bg-gray-200 text-gray-700' : 'bg-blue-500 text-white'}`}
                onClick={nextPage}
                disabled={currentPage === Math.ceil(Object.values(data).length / hotelsPerPage)}
              >
                Next
              </button>
            </li>
          </ul>
        )}
      </div>
      {showPopup && selectedHotel && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">{selectedHotel.hotel.name}</h2>
            <p className="text-gray-600 mb-2">{selectedHotel.offers[0].room.description.text}</p>
            <p className="text-gray-600 mb-2">Guests: {selectedHotel.offers[0].guests.adults}</p>
            <p className="text-gray-600 mb-2">Price: {selectedHotel.offers[0].price.total} {selectedHotel.offers[0].price.currency}</p>
            <button onClick={togglePopup} className="text-white bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Zisan;
