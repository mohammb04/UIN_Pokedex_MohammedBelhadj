import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './pokemonDetail.css';

function PokemonDetail() {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => setPokemonData(data))
      .catch(error => console.error('Error fetching Pokemon data:', error));
  }, [name]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-detail">
      <h2 className="pokemon-name">{pokemonData.name}</h2>
      <div className="pokemon-info">
        <div className="pokemon-image">
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
        <div className="pokemon-stats-abilities">
          <div className="pokemon-stats">
            <h3>Stats</h3>
            <ul>
              {pokemonData.stats.map((stat, index) => (
                <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
              ))}
            </ul>
          </div>
          <div className="pokemon-abilities">
            <h3>Abilities</h3>
            <ul>
              {pokemonData.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
