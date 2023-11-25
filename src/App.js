import { useState } from "react";
import logo from "./img/hola.png";

function App() {
  const [contenido, setContenido] = useState("");
  const estilo1 = {backgroundColor: "red"};
  const estilo2 = {backgroundColor: "yellow"};
  const estilo3 = {backgroundColor: "green"};

  const [colores, setColores] = useState();
  
  const texto = () => {
    setColores(estilo1);
    setContenido("Rojo - Stop");
  };

  const imagen = () => {
    //setContenido( <img src={logo}/>)
    setContenido("Amarillo - Alerta");
    setColores(estilo2);
  }; 

  const fondo = () => {
    setColores(estilo3);
    setContenido("Verde - Avanzar"); 
  };  

  return (
    <>
      <button onClick={()=>{texto()}} >Click me</button>
      <button onClick={()=>{imagen()}} >Click me 2</button>
      <button onClick={()=>{fondo()}} >Click me 3</button>
      <div className="traffic" style={colores}>
        {contenido}
      </div>         
    </>
  );
}

export default App;
