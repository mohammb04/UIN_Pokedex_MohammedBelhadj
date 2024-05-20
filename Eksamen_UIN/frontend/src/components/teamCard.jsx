import React from 'react';

function TeamCard({ name, logoUrl }) {
  return (
    <div className="team-card">
      <h2>{name}</h2>
      <img src={logoUrl} alt={name} />
    </div>
  );
}

export default TeamCard;
