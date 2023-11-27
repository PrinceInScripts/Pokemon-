import React, { useState } from "react";
import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";
import { Link } from "react-router-dom";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function PokemonX() {

  const [searchTerm,setSearchTerm]=useState('')
  return (
    <>
      <div className="flex  justify-center py-10">
        <div className="flex flex-col justify-center items-center gap-10">
          <Link to="/">
            <h1 className="text-4xl font-serif font-bold underline">Pokemon X</h1>
          </Link>
          <Search updateSearchTerm={setSearchTerm}/>
          {searchTerm?<PokemonDetails pokemonName={searchTerm}/>:<PokemonList />}
          
        </div>
      </div>
    </>
  );
}

export default PokemonX;
