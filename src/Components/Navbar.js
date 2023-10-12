import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import "../Styles/main.css";
import { Drawer, List, ListItem } from '@mui/material';

function Navbar() {
	const navRef = useRef();

	const closeNavbar = () => {
		navRef.current.classList.remove("responsive_nav");
	  };

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const [categoriaDrawerOpen, setCategoriaDrawerOpen] = useState(false);

	const toggleCategoriaDrawer = () => {
	  setCategoriaDrawerOpen(!categoriaDrawerOpen);
	};


	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<Link to="/home" onClick={closeNavbar} >Home</Link>
       			<Link to="/Buscar" onClick={closeNavbar} >Buscar</Link>
				<Link onClick={toggleCategoriaDrawer}>Categoría</Link>
				<Drawer anchor="top" open={categoriaDrawerOpen} onClose={toggleCategoriaDrawer}>
        	<div role="presentation" onClick={toggleCategoriaDrawer} onKeyDown={toggleCategoriaDrawer}>
          <List>
            <ListItem>Contenido del Drawer de Categoría</ListItem>
            {/* Agrega más opciones según tus necesidades */}
          </List>
        </div>
      </Drawer>

       			<Link to="/Certificado" onClick={closeNavbar} >Certificados</Link>
        		<Link to="/About" onClick={closeNavbar} >About</Link>
				

     			
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<Outlet />
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
