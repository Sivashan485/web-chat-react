import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        console.log(response.data); // Log the data to see its structure
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from PostgreSQL</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li> // Replace 'your_actual_column_name' with the correct property name
        ))}
      </ul>
    </div>
  );
}

export default App;