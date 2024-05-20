import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './menu.css';

function Menu() {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.search.value.trim();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div className="menu">
      <Link to="/teams" className="menu-item">TEAMS</Link>
      <Link to="/" className="menu-item">UIN POKEDEX</Link>
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" className="search-bar" name="search" placeholder="Search..." />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
}

export default Menu;
