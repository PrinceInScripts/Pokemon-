import axios from 'axios';
import React, { useEffect, useState } from 'react';
import downloadPokemons from '../utils/downloadPokemons';

function usePokemonList(defaultUrl) {


    const [pokemonListState, setPokemonListState] = useState({
      pokemonList: [],
      PokeUrl: defaultUrl,
      nextUrl: defaultUrl,
      prevUrl: defaultUrl,
    });
  
   
  
    useEffect(() => {
        downloadPokemons(pokemonListState,setPokemonListState,defaultUrl);
    }, [pokemonListState.PokeUrl]);

    return [pokemonListState,setPokemonListState]
}

export default usePokemonList;