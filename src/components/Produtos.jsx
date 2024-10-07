import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button, Menu, MenuItem, Modal, Box, TextField } from "@mui/material"; // Usando MUI
import Navbar from "./Navbar";

function Produtos() {
  const [produtos, setProdutos] = useState([
    { id: 1, codigo: "001", nome: "Produto 1", unidade: "Unidade 1", grupo: "Grupo 1", estoque: 10 },
    { id: 2, codigo: "002", nome: "Produto 2", unidade: "Unidade 2", grupo: "Grupo 2", estoque: 20 },
  ]);
  const [nome, setNome] = useState("");
  const [unidade, setUnidade] = useState("");
  const [grupo, setGrupo] = useState("");

  // Estados para o Menu de opções
  const [anchorEl, setAnchorEl] = useState(null);
  const [openIncluirGrupo, setOpenIncluirGrupo] = useState(false); // Modal "Incluir Grupo"

  // Função para abrir/fechar o Menu de opções
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleIncluirProduto = () => {
    const novoProduto = {
      id: produtos.length + 1,
      codigo: `00${produtos.length + 1}`,
      nome,
      unidade,
      grupo,
      estoque: 0,
    };
    setProdutos([...produtos, novoProduto]);
    handleCloseMenu(); // Fechar o menu após incluir produto
  };

  // Função para abrir/fechar o Modal "Incluir Grupo"
  const handleOpenIncluirGrupo = () => {
    setOpenIncluirGrupo(true);
    handleCloseMenu(); // Fecha o menu dropdown ao abrir o modal
  };

  const handleCloseIncluirGrupo = () => {
    setOpenIncluirGrupo(false);
  };

  return (
    <div className="container-fluid">
      {/* Navbar */}
      <Navbar />

      {/* Botões de ação */}
      <div className="row mt-3">
        <div className="col">
          {/* Botão com Menu suspenso */}
          <Button sx={{ width: '86.65px', height: '38.21px', marginRight: "8.5px" }} variant="contained" color="success" onClick={handleClick}>
            Incluir
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
            <MenuItem onClick={handleIncluirProduto}>Incluir Produto</MenuItem>
            <MenuItem onClick={handleOpenIncluirGrupo}>Incluir Grupo</MenuItem>
          </Menu>

          <Button sx={{ width: '86.65px', height: '38.21px', marginRight: "8.5px" }} variant="contained" color="info">
            Alterar
          </Button>

          <Button sx={{ width: '86.65px', height: '38.21px' }} variant="contained" color="error">
            Excluir
          </Button>
        </div>
      </div>

      {/* Tabela de Produtos Cadastradoss */}
      <div className="row mt-3">
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Código</th>
                <th>Nome</th>
                <th>Unidade de Medida</th>
                <th>Grupo</th>
                <th>Estoque</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id}>
                  <td><input type="checkbox" /></td>
                  <td>{produto.codigo}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.unidade}</td>
                  <td>{produto.grupo}</td>
                  <td>{produto.estoque}</td>
                  <td>
                    <button className="btn btn-danger">
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Incluir Grupo */}
      <Modal open={openIncluirGrupo} onClose={handleCloseIncluirGrupo} aria-labelledby="incluirGrupoModalLabel">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <h5 id="incluirGrupoModalLabel">Incluir Grupo</h5>
          <form id="incluirGrupoForm">
            <div className="form-group">
              <TextField
                id="nomeGrupo"
                label="Nome do Grupo"
                variant="outlined"
                fullWidth
                required
              />
            </div>
            <Button type="submit" variant="contained" color="primary">
              Confirmar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCloseIncluirGrupo}
              sx={{ marginLeft: 2 }}
            >
              Cancelar
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Produtos;
