import React from 'react';
import { Link } from 'react-router-dom';
import instinctImg from '../assets/instinct.png';
import valorImg from '../assets/valor.png';
import mysticImg from '../assets/mystic.png';
import './teams.css';

function Teams() {
  return (
    <div className="teams-page">
      <h1>Teams</h1>
      <div className="team-cards">
        <div className="team-card">
          <Link to="/team/instinct">
            <img src={instinctImg} alt="Team Instinct" />
            <p>Team Instinct</p>
          </Link>
        </div>
        <div className="team-card">
          <Link to="/team/valor">
            <img src={valorImg} alt="Team Valor" />
            <p>Team Valor</p>
          </Link>
        </div>
        <div className="team-card">
          <Link to="/team/mystic">
            <img src={mysticImg} alt="Team Mystic" />
            <p>Team Mystic</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Teams;
