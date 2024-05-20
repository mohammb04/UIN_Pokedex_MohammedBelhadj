import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonCard from './pokemonCard';

function PokemonTypeDetail() {
  const { type } = useParams();
  const [pokemonOfType, setPokemonOfType] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${type}`)
      .then(response => response.json())
      .then(data => setPokemonOfType(data.pokemon.map(pokemon => pokemon.pokemon)))
      .catch(error => console.error('Error fetching Pokemon of type:', error));
  }, [type]);

  return (
    <div>
      <h2>{type.toUpperCase()} Pokemons</h2>
      <div className="pokemon-grid">
        {pokemonOfType.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default PokemonTypeDetail;
