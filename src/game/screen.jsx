import "./styles.css";

const Screen = ({ pokemones, hoverPokemon, selectedPokemones }) => {
  console.log(pokemones);

  return (
    <div className="container-screen">
      <div className="screen-text">
        <div className="screen">
          {selectedPokemones.length === 2 ? (
            <div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div>
                  <img
                    src={selectedPokemones[0][0].sprites?.front_default}
                    alt="imagen1"
                  />
                </div>
              </div>
              <div style={{ width: "315px", height: "50%" }}>
                <div>
                  <img
                    src={selectedPokemones[1][0].sprites?.back_default}
                    alt="imagen2"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {pokemones?.map((pokemon) => (
                <div
                  key={pokemon.id}
                  style={{
                    backgroundColor:
                      hoverPokemon === pokemon.id ? "yellow" : "",
                  }}
                >
                  <img src={pokemon.sprites.front_default} alt="pokemones" />
                  <p
                    style={{ fontFamily: "Pokemon Classic", fontSize: "8px" }}
                  >
                    {pokemon.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="container-text">
          <p className="text">
            Nintendo <span>GAME BOY</span>
            <span style={{ fontSize: "8px" }}> TM</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Screen;
