/* const element = document.createElement("h1"); //Crear el elemento
element.innerText= "JovenesProgramadores"; //El texto que colocaremos

const container = document.getElementById("root"); //Variable que obtiene la ID

container.appendChild(element); // Lo que queremos mostrar */
import React from "react"; //Análogo a createElement
import ReactDOM from "react-dom"; //Análogo a appendChild

const style={
  color: "red"
}

function tictac(){
  const element =(
    <div>
      <h1 style={style}>Reloj con React</h1>
      <h2>Son las {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  const container=document.getElementById("root");
  ReactDOM.render(element, container);
}

setInterval(tictac,1000);