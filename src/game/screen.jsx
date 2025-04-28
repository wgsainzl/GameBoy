import "./styles.css";

const Screen = ({ pokemones, hoverPokemon, selectedPokemones, hoverMove, playerHp, cpuHp }) => {

  return (
    <div className="container-screen">
      <div className="screen-text">
        <div className="screen">
          {selectedPokemones.length === 2 ? (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "100px",
                  }}
                >
                  <div
                    style={{
                      width: "295px",
                      backgroundColor: "white",
                      height: "5px",
                      marginTop: "3px",
                      marginLeft: "2px",
                      marginBottom: "1px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: `${playerHp}%`,
                        height: "5px",
                        backgroundColor: "green",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  </div>

                  {selectedPokemones[0][0].moves
                    ?.slice(0, 4)
                    .map((selectedPokemonMove, index) => (
                      <div
                        key={index}
                        style={{
                          fontFamily: "Pokemon Classic",
                          fontSize: "10px",
                          margin: "2px 0",
                          background: "none",
                          border: "1px solid black",
                          borderRadius: "5px",
                          padding: "2px 5px",
                          cursor: "pointer",
                          backgroundColor: hoverMove === index ? "yellow" : "",
                        }}
                      >
                        {selectedPokemonMove.move.name}
                      </div>
                    ))}
                </div>

                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={selectedPokemones[0][0].sprites?.front_default}
                    alt="imagen1"
                    style={{
                      width: "80px",
                      height: "80px",
                      marginRight: "10px",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  width: "315px",
                  height: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <img
                    src={selectedPokemones[1][0].sprites?.back_default}
                    alt="imagen2"
                    style={{ width: "80px", height: "80px" }}
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
                  <p style={{ fontFamily: "Pokemon Classic", fontSize: "8px" }}>
                    {pokemon.name}
                  </p>
                </div>
              ))}
            </div>
          )}
          <div
            style={{
              width: "295px",
              backgroundColor: "white",
              height: "5px",
              marginTop: "3px",
              marginLeft: "2px",
              marginBottom: "1px",
              position: "relative",
            }}
          >
            <div
              style={{
                width: `${cpuHp}%`,
                height: "5px",
                backgroundColor: "green",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          </div>
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
