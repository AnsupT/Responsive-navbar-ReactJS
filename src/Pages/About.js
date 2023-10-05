import React from "react";
//import backgroundImage from "../Images/paw_prints_trail_across_screen.jpg"; // Ruta de tu imagen de fondo
//import "../Styles/About.css";
import firstImage from "../Images/22586394_6660272.jpg";
const About = () => {
  
  const aboutStyle = {
    display: "flex",
    flexDirection: "column", // Cambia la dirección de flexión a "column"
    minHeight: "100vh",
  };

  const sectionStyle = {
    padding: "20px",
    textAlign: "center",
    display: "flex", // Usa flexbox para colocar elementos en línea
    flexDirection: "row", // Alinea los elementos en una fila horizontal
    alignItems: "center", // Centra los elementos verticalmente en la sección
    justifyContent: "center", // Centra los elementos horizontalmente en la sección
  };

  const imageStyle1 = {
    maxWidth: "34%", // Establece el ancho máximo al 50% del contenedor
    height: "auto",
  };

  const imageStyle2 = {
    maxWidth: "30%", // Establece el ancho máximo al 70% del contenedor
    height: "auto",
  };

  

  return (
    <div style={aboutStyle}>
      <div style={sectionStyle}>
        <div>
          <h1>Best Veterinary       </h1>
       </div>
        <img
          src={firstImage}
          alt="Descripción de la primera imagen"
          style={imageStyle1}
        />
      </div>

      <div style={sectionStyle}>
      <img
          src={firstImage}
          alt="Descripción de la segunda imagen"
          style={imageStyle2}
        />
        <div>
          <h2>¿Qué es Best Veterinary?</h2>
          <p>
            Descripción de la segunda sección. Puedes agregar cualquier texto o
            contenido adicional aquí.
          </p>
        </div>
        
        
      </div>
     
    </div>
  );
};

export default About;