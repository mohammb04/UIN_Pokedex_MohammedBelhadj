import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './type.css';

function Type() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then(response => response.json())
      .then(data => setTypes(data.results))
      .catch(error => console.error('Error fetching types:', error));
  }, []);

  return (
    <div>
      <h2>Types</h2>
      <div className="type-grid">
        {types.map((type, index) => (
          <Link key={index} to={`/type/${type.name}`} className="type-card">
            <p>{type.name.toUpperCase()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Type;
