import { use, useEffect, useState } from "react";
import "./App.css";
import Pad from "./game/buttons/Pad.jsx";
import Startselect from "./game/buttons/StartSelect.jsx"
import Screen from "./game/Screen.jsx"

function App() {

  const [pokemones, setPokemones] = useState([]);
  const [hoverPokemon, setHoverPokemon] = useState(0);
  const [selectedPokemones, setSelectedPokemones] = useState([]);

  const BASE_URL = "https://pokeapi.co/api/v2/";

  const getPokemones= async() => {
    const res = await fetch(`${BASE_URL}/pokemon`);
    const data = await res.json();
    console.log(data);
    const pokemonsDetails = await getDetails(data.results);
    setPokemones(pokemonsDetails);
  }

  const getDetails = async (results) => {
    const res = await Promise.all(results.map((result) => fetch(result.url)));
    const data = await Promise.all(( res).map((gato) => gato.json()));
    return data;
  }

  const handlePress = (dir) => {
    console.log(dir);
    if (dir === 'right') {
      setHoverPokemon(hoverPokemon + 1);
    }
    if (dir === 'left') {
      setHoverPokemon(hoverPokemon - 1);
    }
  }

  const handleSelectPokemon = () => {
    console.log('select pokemon', hoverPokemon);
    const pokemonSelected = pokemones.filter(
      (pokemon) => pokemon.id === hoverPokemon
    );

    const selections = [pokemonSelected, computerSelection()];

    console.log({selections});
    setSelectedPokemones(selections);
  };

  const computerSelection = () => {
    const randomId = Math.floor(Math.random() * pokemones.length);
    console.log(randomId);
    const selectElement = pokemones.filter((pokemon) => pokemon.id == randomId);
    console.log({selectElement})

    return selectElement
  }

  useEffect(() => {
    getPokemones();
  }, [])

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* container game */}
        <div
          style={{
            width: "350px",
            height: "500px",
            border: "2px black solid",
            borderRadius: "5px 5px 35px 5px",
          }}
        >
          {/* container screen */}

          <Screen pokemones={pokemones} hoverPokemon={hoverPokemon} selectedPokemones={selectedPokemones} />
          {/* Container de botones */}
          <div style={{ display: "flex", justifyContent: "space-around"}}>
            <Pad handlePress ={handlePress}/>
            <div style={{ paddingTop: "30%" }}>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  backgroundColor: "gray",
                  alignItems: "center",
                }}
              >
                <button className= "selectButton" style={{ rotate: "320deg" }} onClick={handleSelectPokemon}> Select </button>
                <button className= "selectButton" style={{ rotate: "320deg" }}> Start </button>
              </div>
            </div>
            <div
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "black",
              }}
            >
              <button
                style={{
                  backgroundColor: "#41498F",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              ></button>
              <button
                style={{
                  backgroundColor: "#41498F",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;