import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonCard from '../components/pokemonCard';

function SearchResults() {
  const { searchTerm } = useParams();
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    if (!searchTerm) return;

    const normalizedSearchTerm = searchTerm.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (!data.results || !Array.isArray(data.results)) {
          throw new Error('Invalid data received from the server');
        }
        setPokemonData(data.results);
      })
      .catch(error => {
        console.error('Error fetching Pokemon data:', error);
      });
  }, [searchTerm]);

  useEffect(() => {
    if (!searchTerm || !pokemonData.length) return;

    const filtered = pokemonData.filter(pokemon => pokemon.name.includes(searchTerm.toLowerCase()));
    setFilteredResults(filtered);
  }, [searchTerm, pokemonData]);

  return (
    <div>
      <h2>Search Results for "{searchTerm}"</h2>
      <div className="pokemon-grid">
        {filteredResults.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
