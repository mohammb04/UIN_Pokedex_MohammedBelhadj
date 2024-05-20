import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonCard from './pokemonCard';

const teamPokemonUrls = {
  instinct: 'https://pokeapi.co/api/v2/type/electric',
  valor: 'https://pokeapi.co/api/v2/type/fire',
  mystic: 'https://pokeapi.co/api/v2/type/water',
};

function TeamDetail() {
  const { team } = useParams();
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch(teamPokemonUrls[team])
      .then(response => response.json())
      .then(data => {
        const pokemonList = data.pokemon.map(p => p.pokemon);
        setPokemonData(pokemonList);
      })
      .catch(error => console.error('Error fetching team Pokemon data:', error));
  }, [team]);

  return (
    <div>
      <h2>{`Team ${team.charAt(0).toUpperCase() + team.slice(1)}`}</h2>
      <div className="pokemon-grid">
        {pokemonData.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default TeamDetail;
