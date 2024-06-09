import React, { useState } from "react";

const FlightDestinations = () => {
  const [destination, setDestination] = useState("domestic");

  const handleDomesticClick = () => {
    setDestination("domestic");
  };

  const handleInternationalClick = () => {
    setDestination("international");
  };

  const renderImages = () => {
    if (destination === "domestic") {
      return (
        <>
          <div className="relative group">
            <img src={require("../assets/cox.jpg")} alt="Domestic 1" className="w-auto h-48 rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center p-2">
              Cox's Bazar
            </div>
          </div>

          <div className="relative group">
  <img src={require("../assets/bandarban.jpg")} alt="Domestic 2" className="w-auto h-48 rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
  <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center p-2">
    Bandarban
  </div>
</div>
<div className="relative group">
  <img src={require("../assets/sylhet.jpg")} alt="Domestic 3" className="w-auto h-48 rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
  <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center p-2">
    Sylhet
  </div>
</div>
<div className="relative group">
  <img src={require("../assets/Mount.jpg")} alt="Domestic 4" className="w-auto h-48 rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
  <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center p-2">
    Khagrachari
  </div>
</div>
          {/* Add similar structures for other domestic images */}
        </>
      );
    } else if (destination === "international") {
      return (
        <>
          <div className="relative group">
            <img src={require("../assets/1.jpg")} alt="International 1" className="w-auto h-48 rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center p-2">
              SuizerLand
            </div>
          </div>

          <div className="relative group">
  <img src={require("../assets/2.jpg")} alt="International 2" className="w-auto h-48 rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
  <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center p-2">
    Newzeland
  </div>
</div>
<div className="relative group">
  <img src={require("../assets/3.jpg")} alt="International 3" className="w-auto h-48 rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
  <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center p-2">
    Ireland
  </div>
</div>
<div className="relative group">
  <img src={require("../assets/4.jpg")} alt="International 4" className="w-auto h-48 rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
  <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center p-2">
    Netherland
  </div>
</div>
          {/* Add similar structures for other international images */}
        </>
      );
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Popular Flight Destinations from BD</h1>
      <p className="text-1xl font-semibold mb-8 text-center">Expand your travel horizons with new facets! Diversify your journey to explore local destinations or global marvels around Asia, Europe, America, Canada or anywhere</p>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`${
            destination === "domestic" ? "bg-blue-500" : "bg-gray-300"
          } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          onClick={handleDomesticClick}
        >
          Domestic
        </button>
        <button
          className={`${
            destination === "international" ? "bg-blue-500" : "bg-gray-300"
          } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          onClick={handleInternationalClick}
        >
          International
        </button>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {renderImages()}
      </div>
    </div>
  );
};

export default FlightDestinations;
