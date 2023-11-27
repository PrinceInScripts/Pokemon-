import axios from "axios";

const downloadPokemons = async (pokemonListState,setPokemonListState,defaultUrl,limit=20) => {
    const response = await axios.get(
      pokemonListState.PokeUrl ? pokemonListState.PokeUrl : defaultUrl
    );

    let pokemonResults = response.data.results? response.data.results:response.data.pokemon;
    pokemonResults=pokemonResults.slice(0,limit)
    const pokemonPromise = pokemonResults.map((p) =>{
        if(p.url){
            return axios.get(p.url)
        }
        else if(p.pokemon.url){
            return axios.get(p.pokemon.url)
        }
    }
      
    );

    

    const pokemonListData = await axios.all(pokemonPromise);


    const pokemonFinalList = pokemonListData.map((pokemon) => {
      const pokemonData = pokemon.data;
      return {
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.other.dream_world.front_default,
        type: pokemonData.types,
      };
    });

    setPokemonListState((state) => ({
      ...state,
      pokemonList: pokemonFinalList,
      nextUrl: response.data.next,
      prevUrl: response.data.prev,
    }));
  };

  export default downloadPokemons