import React from 'react';
  // import searchbar from './styles/SearchBar.module.css';
import  './SearchBar.css'

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const handleOnSearch = () => {
  const input = document.getElementById("searchInput")
  onSearch(input.value);
  input.value = "";
};
  return (
    <div className="searchbar">
     <input className="input" id="searchInput" placeholder="Busque una ciudad..." /> 
     <div className="div">
        <button className="button" onClick={handleOnSearch}>+</button>
        </div>
   </div>
  );
};
