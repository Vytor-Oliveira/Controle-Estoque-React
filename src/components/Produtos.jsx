import React, { useState } from 'react';
import { Button, Menu, MenuItem, Modal, Box, TextField } from '@mui/material';
import Navbar from './Navbar';
import TabelaProdutos from './TabelaProdutos'; // Importe o novo componente

function Produtos() {
  const [produtos, setProdutos] = useState([
    { id: 1, codigo: '001', nome: 'Produto 1', unidade: 'Unidade 1', grupo: 'Grupo 1', estoque: 10 },
    { id: 2, codigo: '002', nome: 'Produto 2', unidade: 'Unidade 2', grupo: 'Grupo 2', estoque: 20 },
  ]);
  const [nome, setNome] = useState('');
  const [unidade, setUnidade] = useState('');
  const [grupo, setGrupo] = useState('');

  const [anchorEl, setAnchorEl] = useState(null);
  const [openIncluirGrupo, setOpenIncluirGrupo] = useState(false);
  const [openIncluirProduto, setOpenIncluirProduto] = useState(false);

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
    handleCloseIncluirProduto(); 
  };

  const handleOpenIncluirGrupo = () => {
    setOpenIncluirGrupo(true);
    handleCloseMenu();
  };

  const handleCloseIncluirGrupo = () => {
    setOpenIncluirGrupo(false);
  };

  const handleOpenIncluirProduto = () => {
    setOpenIncluirProduto(true);
    handleCloseMenu();
  };

  const handleCloseIncluirProduto = () => {
    setOpenIncluirProduto(false);
  };

  return (
    <div className="container-fluid">
      <Navbar />

      {/* Botões de ação */}
      <div className="row mt-3">
        <div className="col">
          <Button sx={{ width: '86.65px', height: '38.21px', marginRight: '8.5px' }} variant="contained" color="success" onClick={handleClick}>
            Incluir
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
            <MenuItem onClick={handleOpenIncluirProduto}>Incluir Produto</MenuItem>
            <MenuItem onClick={handleOpenIncluirGrupo}>Incluir Grupo</MenuItem>
          </Menu>

          <Button sx={{ width: '86.65px', height: '38.21px', marginRight: '8.5px' }} variant="contained" color="info">
            Alterar
          </Button>

          <Button sx={{ width: '86.65px', height: '38.21px' }} variant="contained" color="error">
            Excluir
          </Button>
        </div>
      </div>

      {/* Tabela de Produtos Cadastrados */}
      <div className="row mt-3">
        <div className="col">
          <TabelaProdutos produtos={produtos} /> {/* Use o novo componente aqui */}
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
            bgcolor: '#f5f5f5',
            borderRadius: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
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
                sx={{ marginBottom: 2 }}
              />
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
              <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: '8px' }}>
                Confirmar
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleCloseIncluirGrupo}
                sx={{ marginLeft: 2, borderRadius: '8px' }}
              >
                Cancelar
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>

      {/* Modal Incluir Produto */}
      <Modal open={openIncluirProduto} onClose={handleCloseIncluirProduto} aria-labelledby="incluirProdutoModalLabel">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: '#f5f5f5',
            borderRadius: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            p: 4,
          }}
        >
          <h5 id="incluirProdutoModalLabel">Incluir Produto</h5>
          <form id="incluirProdutoForm" onSubmit={(e) => { e.preventDefault(); handleIncluirProduto(); }}>
            <div className="form-group">
              <TextField
                label="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                fullWidth
                variant="outlined"
                required
                sx={{ marginBottom: 2 }}
              />
            </div>
            <div className="form-group">
              <TextField
                label="Unidade de Medida"
                value={unidade}
                onChange={(e) => setUnidade(e.target.value)}
                fullWidth
                variant="outlined"
                required
                sx={{ marginBottom: 2 }}
              />
            </div>
            <div className="form-group">
              <TextField
                label="Grupo"
                value={grupo}
                onChange={(e) => setGrupo(e.target.value)}
                fullWidth
                variant="outlined"
                required
                sx={{ marginBottom: 2 }}
              />
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
              <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: '8px' }}>
                Confirmar
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleCloseIncluirProduto}
                sx={{ marginLeft: 2, borderRadius: '8px' }}
              >
                Cancelar
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Produtos;
