import React, { useState, useEffect } from 'react';

function Zisan1() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/get_zisan/');
      const jsonData = await response.json();
      
      setData(jsonData);
      console.log(jsonData); // Print jsonData to console
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>JSON Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Zisan1;
