import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Importando Link do react-router-dom para navegação

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'flex-start' }}> {/* Alinhando para a direita */}
        <Typography variant="h6" style={{ marginRight: '16px' }}> {/* Adicionando margem à direita */}
          <Link to="/produtos" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit" startIcon={<i className="fa-solid fa-shop" />} >
              Produtos
            </Button>
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/estoque" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit" startIcon={<i className="fa-solid fa-box" />} >
              Estoque
            </Button>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
