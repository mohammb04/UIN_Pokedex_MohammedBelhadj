import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PokemonCard({ pokemon }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(pokemon.url)
      .then(response => response.json())
      .then(data => {
        setPokemonData(data);
      })
      .catch(error => console.error('Error fetching Pokemon data:', error));
  }, [pokemon.url]);

  if (!pokemonData) {
    return null;
  }

  return (
    <Link to={`/pokemon/${pokemonData.name}`} className="pokemon-card">
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <p>{pokemonData.name}</p>
    </Link>
  );
}

export default PokemonCard;
