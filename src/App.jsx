import { use, useEffect, useState } from "react";
import "./App.css";
import Pad from "./game/buttons/Pad.jsx";
import Startselect from "./game/buttons/StartSelect.jsx"
import Screen from "./game/Screen.jsx"

function App() {

  const [pokemones, setPokemones] = useState([]);

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

          <Screen pokemones={pokemones}/>
          {/* Container de botones */}
          <div style={{ display: "flex", justifyContent: "space-around"}}>
            <Pad handlePress ={handlePress}/>
            <div style={{ paddingTop: "30%" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  backgroundColor: "gray",
                  alignItems: "center",
                }}
              >
                <button style={{ rotate: "150deg" }}></button>
                <button style={{ rotate: "150deg" }}></button>
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