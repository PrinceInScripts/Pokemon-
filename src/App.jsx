import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import PokemonX from "./components/PokemonX/PokemonX";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokemonX />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
      <Route path="*" element="<h1>Not Found<h1/>" />
    </Routes>
  );
}

export default App;
