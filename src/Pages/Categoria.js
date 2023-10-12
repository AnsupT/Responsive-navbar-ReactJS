import React, { useState } from 'react';
import { Drawer, List, ListItem } from '@mui/material';

function Categoria() {
  const [categoriaDrawerOpen, setCategoriaDrawerOpen] = useState(true);

  const toggleCategoriaDrawer = () => {
    setCategoriaDrawerOpen(!categoriaDrawerOpen);
  };

  return (
    <div>
      {/* Resto de tu contenido de la página de Categoría */}
    </div>
  );
}

export default Categoria;