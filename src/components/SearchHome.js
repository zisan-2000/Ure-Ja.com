import React, { useState } from 'react';
import SearchForm from './SearchForm';

function SearchHome() {
  const [error, setError] = useState(null);

  const handleSearch = async (formData) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Data posted successfully:', data); // Log the response to the console
    } catch (error) {
      console.error('Error posting data:', error);
      setError('Error posting data. Please try again later.');
    }
  };

  return (
    <div className="App">
      <h1>Hotel Booking App</h1>
      <SearchForm onSearch={handleSearch} />
      {error && <p>{error}</p>}
    </div>
  );
}

export default SearchHome;
