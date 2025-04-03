import { createElement } from "react";
import "./App.css";
import Screen from "./game/Screen";

function App() {
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
          <Screen />
          {/* container buttons */}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#C8C5CA",
                borderRadius: "20px 20px 20px 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <button
                  style={{
                    backgroundColor: "black",
                    width: "45px",
                    height: "45px",
                  }}
                ></button>
              </div>
            </div>
            <div style={{ paddingTop: "30%" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "gray",
                  display:"flex",
                  alignItems:"center" 
                }}
              >
                <button
                  style={{
                    height: "1px",
                    width: "30px",
                    transform: "rotate(150deg",
                  }}
                ></button>
                <button
                  style={{
                    height: "1px",
                    width: "30px",
                    transform: "rotate(150deg",
                  }}
                ></button>
              </div>
            </div>
            {/* botones A y B */}
            <div
              style={{
                width: "60px",
                height: "60px",
                display: "flex",
                backgroundColor: "black",
                borderRadius: "10px 10px 10px 10px",
              }}
            >
              <div>
                <button
                  style={{
                    backgroundColor: "#821660",
                    borderRadius: "50%",
                    height: "40px",
                    width: "40px",
                  }}
                ></button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: "#821660",
                    borderRadius: "50%",
                    height: "40px",
                    width: "40px",
                  }}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
