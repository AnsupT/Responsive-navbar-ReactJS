import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>CONTACTOS</h4>
            <ul className="list-unstyled">
              <li>Fono: +56922222221</li>
              <li>Direccion: iquique,chile</li>
              <li>Correo: sas@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;