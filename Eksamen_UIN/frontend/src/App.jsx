import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import Home from './pages/home';
import Teams from './pages/teams';
import PokemonDetail from './components/pokemonDetail';
import SearchResults from './pages/searchResults';
import PokemonTypeDetail from './components/pokemonTypeDetail';
import TeamDetail from './components/teamDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Bruker Home som hovedside */}
          <Route path="/teams" element={<Teams />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
          <Route path="/search/:searchTerm" element={<SearchResults />} />
          <Route path="/type/:type" element={<PokemonTypeDetail />} />
          <Route path="/team/:team" element={<TeamDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
