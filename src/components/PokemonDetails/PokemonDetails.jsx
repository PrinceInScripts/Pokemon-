import { Link } from "react-router-dom";
import usePokemonDetails from "../../hooks/usePokemonDetails";
import Pokemon from "../Pokemon/Pokemon";

const PokemonDetails = ({pokemonName}) => {

  const [pokemon,pokemonListData]=usePokemonDetails(pokemonName)
  return (
    <>
      <div className=" bg-orange-100 h-full p-10">
        <div className="flex flex-col justify-center items-center gap-10">
          <Link to="/">
            <h1 className="text-4xl font-serif font-bold underline">Pokemon X</h1>
          </Link>
          <div className="flex flex-col items-center gap-10">
            <h1 className="text-2xl font-serif tracking-widest font-semibold">
              {pokemon.name?.toUpperCase()}
            </h1>
            <img src={pokemon.imageUrl} alt={pokemon.name} className="w-80" />
          </div>
          <div className="flex items-center gap-8 text-2xl font-mono font-medium">
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
          </div>
          <div className="flex gap-5 text-2xl items-center">
            <h1 className="font-semibold font-serif">Type : </h1>
            {Array.isArray(pokemon.type) &&
              pokemon.type.map((t) => (
                <span
                  className="px-6 py-2 bg-white border-2 border-gray-500 rounded-xl flex items-center font-serif "
                  key={t.type.name}
                >
                  {t.type.name}
                </span>
              ))}
          </div>
        </div>

        {/* Similar Pokemon */}
        <div className="pt-20 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center p-10">
                <h2 className="mb-20 text-6xl font-semibold font-serif">Similar Pokemon</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
                {pokemonListData.pokemonList.length>0 &&
                pokemonListData.pokemonList.map((pokemon)=>
                
                    <Pokemon
                name={pokemon.name}
                key={pokemon.id}
                id={pokemon.id}
                type={pokemon.type}
                url={pokemon.image}
              />
                
                )
                }
                </div>
                
            </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
