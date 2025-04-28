import { use, useEffect, useState } from "react";
import "./App.css";
import Pad from "./game/buttons/Pad.jsx";
import Startselect from "./game/buttons/StartSelect.jsx";
import Screen from "./game/Screen.jsx";

function App() {
  const [pokemones, setPokemones] = useState([]);
  const [hoverPokemon, setHoverPokemon] = useState(1);
  const [selectedPokemones, setSelectedPokemones] = useState([]);
  const [moves, setMoves] = useState([]);
  const [hoverMove, setHoverMove] = useState(0);
  const [selectedMoves, setSelectedMoves] = useState([]);
  const [playerHp, setPlayerHp] = useState(100);
  const [cpuHp, setCpuHp] = useState(100);

  const BASE_URL = "https://pokeapi.co/api/v2/";

  const getPokemones = async () => {
    const res = await fetch(`${BASE_URL}/pokemon`);
    const data = await res.json();
    const pokemonsDetails = await getDetails(data.results);
    setPokemones(pokemonsDetails);
  };

  const getDetails = async (results) => {
    const res = await Promise.all(results.map((result) => fetch(result.url)));
    const data = await Promise.all(res.map((gato) => gato.json()));
    return data;
  };

  const handlePress = (dir) => {
    if (dir === "right") {
      setHoverPokemon((prev) => (prev < pokemones.length ? prev + 1 : 1));
    }
    if (dir === "left") {
      setHoverPokemon((prev) => (prev > 1 ? prev - 1 : pokemones.length));
    }
    if (dir === "down") {
      setHoverMove((prev) => (prev < 4 ? prev + 1 : 0));
    }
    if (dir === "up") {
      setHoverMove((prev) => (prev > 0 ? prev - 1 : 3));
    }
  };

  const handleAttack = () => {
    if (selectedPokemones.length === 2) {
      const damage = Math.floor(Math.random() * 20) + 5;
      setCpuHp((prev) => Math.max(prev - damage, 0));

      setTimeout(() => {
        const cpuDamage = Math.floor(Math.random() * 20) + 5;
        setPlayerHp((prev) => Math.max(prev - cpuDamage, 0));
      }, 1000);
    }
  };

  const handleSelectPokemon = () => {
    const pokemonSelected = pokemones.filter(
      (pokemon) => pokemon.id === hoverPokemon
    );

    const selections = [pokemonSelected, computerSelection()];

    setSelectedPokemones(selections);
    setHoverMove(0);
  };

  const computerSelection = () => {
    const randomId = Math.floor(Math.random() * pokemones.length);
    console.log(randomId);
    const selectElement = pokemones.filter((pokemon) => pokemon.id == randomId);
    console.log({ selectElement });

    return selectElement;
  };

  useEffect(() => {
    getPokemones();
  }, []);

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
            backgroundColor: "lightskyblue",
          }}
        >
          {/* container screen */}

          <Screen
            pokemones={pokemones}
            hoverPokemon={hoverPokemon}
            selectedPokemones={selectedPokemones}
            hoverMove={hoverMove}
            playerHp={playerHp}
            cpuHp={cpuHp}
          />
          {/* Container de botones */}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Pad handlePress={handlePress} />
            <div style={{ paddingTop: "30%" }}>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="divSelect">
                  <button
                    className="selectButton"
                    style={{ rotate: "330deg" }}
                    onClick={handleSelectPokemon}
                  >
                    {" "}
                    Select{" "}
                  </button>
                </div>
                <div className="divSelect">
                  <button className="selectButton" style={{ rotate: "330deg" }}>
                    {" "}
                    Start{" "}
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                width: "80px",
                height: "80px",
              }}
            >
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                <button
                  className="buttonAction"
                  style={{
                    backgroundColor: "#41498F",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                  onClick={handleAttack}
                >
                  <p
                    style={{
                      marginTop: 5,
                      color: "#d3d3d3 ",
                    }}
                  >
                    A
                  </p>
                </button>
              </div>
              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                <button
                  className="buttonAction"
                  style={{
                    backgroundColor: "#41498F",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                >
                  <p
                    style={{
                      marginTop: 5,
                      color: "#d3d3d3",
                    }}
                  >
                    B
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
