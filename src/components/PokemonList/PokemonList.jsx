// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Pokemon from "../Pokemon/Pokemon";

// function PokemonList() {
//   const defaultUrl = "https://pokeapi.co/api/v2/pokemon";

//   const [pokemonList, setPokemonList] = useState([]);

//   const [PokeUrl, setPokeUrl] = useState(defaultUrl);
//   const [nextUrl, setNextUrl] = useState(defaultUrl);
//   const [prevUrl, setPrevUrl] = useState(defaultUrl);

//   const downloadPokemon = async () => {
//     const response = await axios.get(PokeUrl ? PokeUrl : defaultUrl);

//     const pokemonResults = response.data.results;

//     setNextUrl(response.data.next);
//     setPrevUrl(response.data.prev);

//     const pokemonPromise = pokemonResults.map((pokemon) =>
//       axios.get(pokemon.url)
//     );

//     const pokemonListData = await axios.all(pokemonPromise);

//     const pokemonFinalList = pokemonListData.map((pokemon) => {
//       const pokemonData = pokemon.data;
//       return {
//         id: pokemonData.id,
//         name: pokemonData.name,
//         image: pokemonData.sprites.other.dream_world.front_default,
//         type: pokemonData.types,
//       };
//     });

//     setPokemonList(pokemonFinalList);
//   };

//   useEffect(() => {
//     downloadPokemon();
//     // fetch(PokeUrl)
//     // .then((res)=>res.json())
//     // .then((data)=>console.log(data.results))
//   }, [PokeUrl]);
//   return (
//     <>
//       <div className=" p-10 flex items-center justify-center">
//         <div className="flex flex-col items-center gap-10">
//           <div className="flex flex-col items-center">
//             <h1 className="text-4xl font-mono font-semibold mb-2">
//               Pokemon List
//             </h1>
//             <div className="flex gap-2">
//               <button
//                 onClick={() => setPokeUrl(prevUrl)}
//                 className="px-5 py-1 rounded-md hover:bg-orange-300 bg-orange-400"
//               >
//                 Prev
//               </button>
//               <button
//                 onClick={() => setPokeUrl(nextUrl)}
//                 className="px-5 py-1 rounded-md hover:bg-orange-300 bg-orange-400"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
//             {pokemonList.map((pokemon) => (
//               <Pokemon
//                 name={pokemon.name}
//                 key={pokemon.id}
//                 id={pokemon.id}
//                 type={pokemon.type}
//                 url={pokemon.image}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default PokemonList;

import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";

function PokemonList() {
 
    const defaultUrl = "https://pokeapi.co/api/v2/pokemon";

    const [pokemonListState,setPokemonListState]=usePokemonList(defaultUrl)
 
  return (
    <>
      <div className=" p-10 flex items-center justify-center">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-mono font-semibold mb-2">
              Pokemon List
            </h1>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setPokemonListState({
                    ...pokemonListState,
                    PokeUrl: pokemonListState.prevUrl,
                  })
                }
                className="px-5 py-1 rounded-md hover:bg-orange-300 bg-orange-400"
              >
                Prev
              </button>
              <button
                onClick={() =>
                  setPokemonListState({
                    ...pokemonListState,
                    PokeUrl: pokemonListState.nextUrl,
                  })
                }
                className="px-5 py-1 rounded-md hover:bg-orange-300 bg-orange-400"
              >
                Next
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
            {pokemonListState.pokemonList.map((pokemon) => (
              <Pokemon
                name={pokemon.name}
                key={pokemon.id}
                id={pokemon.id}
                type={pokemon.type}
                url={pokemon.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonList;
