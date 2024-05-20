import React, { useState, useEffect } from 'react';

function TeamList({ onSelect }) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const teamsData = data.results.map((pokemon, index) => ({
          id: index + 1,
          name: pokemon.name,
          url: pokemon.url
        }));
        setTeams(teamsData);
      })
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <h2>My Teams</h2>
      <ul>
        {teams.map((team, index) => (
          <li key={index} onClick={() => onSelect(team)}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeamList;
