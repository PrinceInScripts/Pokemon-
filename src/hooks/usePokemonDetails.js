import axios from 'axios';
import React, { useEffect, useState } from 'react';
import downloadPokemons from '../utils/downloadPokemons';
import { useParams } from 'react-router-dom';

function usePokemonDetails(pokemonName) {

  const {id} = useParams();


  const pokemonDetailsUrl = "https://pokeapi.co/api/v2/pokemon/";
  const pokemonTypeUrl="https://pokeapi.co/api/v2/type/";

  const [pokemon, setPokemon] = useState({});

  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    PokeUrl: '',
    nextUrl: '',
    prevUrl: '',
  });

  const downloadPokemon = async (id) => {
    console.log(pokemonDetailsUrl +((pokemonName) ? pokemonName :id));
    const response = await axios.get(pokemonDetailsUrl +((pokemonName) ? pokemonName :id));
    const pokemonData = response.data;

    const pokeData = {
      name: pokemonData.species.name,
      imageUrl: pokemonData.sprites.other.dream_world.front_default,
      height: pokemonData.height,
      weight: pokemonData.weight,
      type: pokemonData.types,
    };

    setPokemon(pokeData);

    const types=response.data.types.map((t)=>t.type.name)
    
    return types[0]
  };

  async function downloadPokemonDetailAndRelated(id){
    try {
      const type= await downloadPokemon(id)
    await downloadPokemons(pokemonListState,setPokemonListState,pokemonTypeUrl +`${type}`)
    } catch (error) {
      
    }
   
  }

  useEffect(() => {
    downloadPokemonDetailAndRelated(id);
    window.scrollTo({top:0,left:0,behavior:'smooth'})
  }, [id,pokemonName]);

  return [pokemon,pokemonListState];
}

export default usePokemonDetails;