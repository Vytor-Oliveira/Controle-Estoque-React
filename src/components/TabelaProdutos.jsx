import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

function TabelaProdutos({ produtos }) {
  const columns = [
    { field: 'codigo', headerName: 'Código', width: 130 },
    { field: 'nome', headerName: 'Nome', width: 150 },
    { field: 'unidade', headerName: 'Unidade de Medida', width: 180 },
    { field: 'grupo', headerName: 'Grupo', width: 130 },
    { field: 'estoque', headerName: 'Estoque', type: 'number', width: 100 },
    {
      field: 'acoes',
      headerName: 'Ações',
      width: 150,
      renderCell: (params) => (
        <button className="btn btn-danger" onClick={() => handleExcluir(params.row.id)}>
          Excluir
        </button>
      ),
    },
  ];

  const handleExcluir = (id) => {
    // Função de exclusão de produto
    console.log("Excluir produto com ID:", id);
  };

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={produtos}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default TabelaProdutos;
