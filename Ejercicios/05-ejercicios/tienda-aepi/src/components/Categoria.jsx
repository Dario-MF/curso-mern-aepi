import React, { useState, useEffect } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Categoria = ({ productos, changeCategoria }) => {
  const [dropdownOpen, setOpen] = useState(false);

  const [categorias, setCategorias] = useState([]);
  
  useEffect(() => {
        productos.forEach(producto => {
            const updateCategorias = categorias;
            if( !updateCategorias.includes(producto.category) ){
                setCategorias([...updateCategorias, producto.category]);
            };
        });  
  }, [categorias, productos]);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Categoria
      </DropdownToggle>
      <DropdownMenu>
        {
          categorias.map(categoria => (
            <DropdownItem 
              key={categoria} 
              onClick={()=> changeCategoria(categoria)}
              >{categoria}
            </DropdownItem>
          ))
        }
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default Categoria;