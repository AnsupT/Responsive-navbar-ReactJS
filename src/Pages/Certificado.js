import React from "react";
import { Avatar, IconButton, Card, CardContent, CardMedia } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import firstImage from "../Images/ISO-9001.png";
import secImage from "../Images/cism_isaca.png";
import triImage from "../Images/istockphoto-1352580802-612x612.jpg";

const Certificado = () => {
   const redesSociales = [
    { icon: <Facebook />, link: 'https://www.facebook.com/' },
    { icon: <Twitter />, link: 'https://www.twitter.com/' },
    { icon: <LinkedIn />, link: 'https://www.linkedin.com/' },
  ];

  const persona = {
    nombre: "vanessa castillo",
    avatarURL: "URL de la imagen del avatar", // Puedes usar una URL de imagen para el avatar
  };

  const certificados = [
    {
      imagen: firstImage ,
      titulo: 'CERTIFICACION ISO 9001' ,
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus mi, tincidunt eget mauris sed, iaculis interdum urna. Quisque tincidunt arcu nunc, quis commodo tortor ',
    },
    {
      imagen: secImage ,
      titulo: 'CERTIFICACION CISM' ,
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus mi, tincidunt eget mauris sed, iaculis interdum urna. Quisque tincidunt arcu nunc, quis commodo tortor ',
    },
    {
      imagen: triImage ,
      titulo: 'CERTIFICACION SSL' ,
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus mi, tincidunt eget mauris sed, iaculis interdum urna. Quisque tincidunt arcu nunc, quis commodo tortor ',
    },
  ];

  const tituloSeccionStyle = {
    marginLeft: '50px', // Margen izquierdo para los títulos de sección
    marginTop: '40px', // Espacio en la parte superior de las secciones
  };

  const contenedorCentradoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const tarjetaStyle = {
    marginBottom: '70px', // Separación entre las tarjetas y aumento del margen inferior
    width: '800px', // Ancho de las tarjetas
    display: 'flex', // Hacer que los elementos internos sean flexibles
  };

  const contenidoStyle = {
    marginLeft: '20px', // Espacio entre la imagen y la descripción
  };

  const subtituloStyle = {
    fontSize: '14px', // Tamaño de fuente más pequeño
    opacity: '0.7', // Opacidad del texto
  };

  const cardtituloStyle = {
    opacity: '0.3', // Opacidad del texto
  };

  const imagenStyle = {
    objectFit: 'cover',
    width: '20%', // Ajusta automáticamente el ancho de la imagen
    height: '50%', // Ajusta la altura de la imagen al 100% del contenedor
  };

  const contenedorPrincipalStyle = {
    margin: '20px', // Márgenes para todos los lados
    marginLeft: 'auto', // Centra el contenedor horizontalmente
    marginRight: 'auto', // Centra el contenedor horizontalmente
    maxWidth: '1200px', // Ancho máximo del contenido para evitar que se extienda demasiado
  };

  return (
    <div style={contenedorPrincipalStyle}>
      {/* Sección de Redes Sociales */}
      <h2 style={tituloSeccionStyle}>INFORMACION DE CONTACTO</h2>
      <div style={{ textAlign: 'center', margin: '100px 0' }}>
       <div style={contenedorCentradoStyle}>
          <Avatar alt={persona.nombre} src={persona.avatarURL} style={{ width: '50px', height: '50px' }} />
          <h3>{persona.nombre}</h3>
          <p style={subtituloStyle}>CEO</p>
        </div>
        {redesSociales.map((red, index) => (
          <IconButton key={index} onClick={() => window.open(red.link)}>
            {red.icon}
          </IconButton>
        ))}
      </div>

      {/* Sección de Certificados */}
      <h2 style={tituloSeccionStyle}>CERTIFICACIONES</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        {certificados.map((certificado, index) => (
          <Card key={index} style={{ ...tarjetaStyle }}>
            <CardMedia
              component="img"
              alt="Certificado"
              height="140"
              image={certificado.imagen}
              style={imagenStyle} /* Ajusta la propiedad object-fit */
            />
            <CardContent style={contenidoStyle}>
              <h2 style={cardtituloStyle}> {certificado.titulo} </h2>
              <p>{certificado.descripcion}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certificado;  