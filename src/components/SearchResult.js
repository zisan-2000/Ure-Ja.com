// SearchResult.js
import React from 'react';

function SearchResult({ data }) {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {data.map((hotel, index) => (
          <li key={index}>
            <h3>{hotel.name}</h3>
            <p>Price: {hotel.price}</p>
            {/* Render other hotel details */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
