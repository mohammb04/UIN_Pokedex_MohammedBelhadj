import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/pokemonCard';
import Type from '../components/type';

function Home() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=9')
      .then(response => response.json())
      .then(data => {
        setPokemonData(data.results);
      })
      .catch(error => console.error('Error fetching Pokemon data:', error));
  }, []);

  return (
    <div>
      <h2>Main Pokemons</h2>
      <div className="pokemon-grid">
        {pokemonData.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
      <Type />
    </div>
  );
}

export default Home;
