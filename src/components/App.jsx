import React from "react";
import Header from "./Header";
import Section1 from "./Section1";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';


function App() {
  return (
    <div className="App">
      <Particles
      style={{ position: "absolute" }}
      height="100%"
      width="100%"
        params={{
          particles:{
            number:{
              value:30,
              density:{
                enable:true,
                value_area:900
              }
            },
            shape:{
              type:"square",
              stroke:{
                width:6,
                color:"black"
              }
            }
          }
        }}
      />
      <Header/>
      <Section1/>
    </div>
  );
}

export default App;
