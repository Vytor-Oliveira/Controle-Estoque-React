import React from "react";
import Navbar from "./Navbar"; // Importando o componente Navbar
import { Button, Menu, MenuItem, Modal, Box, TextField } from "@mui/material"; // Importando MUI

function Estoque() {
  return (
    <div className="container-fluid">
      {/* Navbar */}
      <Navbar /> {/* Adicionando a Navbar aqui */}

      {/* Dropdown buttons */}
      <div className="row mt-3">
        <div className="col">
          {/* Botão com Menu suspenso */}
          <Button sx={{ width: '130px', marginRight: "8.5px" }} variant="contained" color="success">
            Movimentação
          </Button>

          <Button sx={{ width: '86.65px', height: '38.21px', marginRight: "8.5px" }} variant="contained" color="info">
             Alterar
          </Button>
          
        </div>
      </div>

      {/* Table */}
      <div className="row mt-3">
        <div className="col">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Data Movimentação</th>
                <th>Tipo</th>
                <th>Responsável</th>
                <th>Observação</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {/* Dados preenchidos dinamicamente */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal para movimentação entrada */}
      <div
        className="modal fade"
        id="movimentacaoEntradaModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="movimentacaoEntradaModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="movimentacaoEntradaModalLabel">
                Movimentação de Estoque
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="movimentacaoEstoqueForm">
                {/* Form fields */}
                <div className="form-group row">
                  <label htmlFor="documento" className="col-sm-2 col-form-label">
                    Documento
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="documento" readOnly />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="data" className="col-sm-2 col-form-label">
                    Data
                  </label>
                  <div className="col-sm-4">
                    <input type="date" className="form-control" id="data" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="tipo" className="col-sm-2 col-form-label">
                    Tipo
                  </label>
                  <div className="col-sm-4">
                    <select className="form-control" id="tipo">
                      <option value="entrada">Entrada</option>
                      <option value="saida">Saída</option>
                    </select>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="motivo" className="col-sm-2 col-form-label">
                    Motivo
                  </label>
                  <div className="col-sm-10">
                    <select className="form-control" id="motivo">
                      <option value="levantamento">Levantamento</option>
                      <option value="sobras">Sobras</option>
                      <option value="quebra">Quebra</option>
                    </select>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="observacao" className="col-sm-2 col-form-label">
                    Observação
                  </label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="observacao" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="produtoCodigo" className="col-sm-2 col-form-label">
                    Produto
                  </label>
                  <div className="col-sm-4">
                    <input type="text" className="form-control" id="produtoCodigo" placeholder="Código ou Nome" />
                  </div>
                  <div className="col-sm-6">
                    <input type="text" className="form-control" id="produtoNome" disabled placeholder="Nome do Produto" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="produtoUnidade" className="col-sm-2 col-form-label">
                    Unidade
                  </label>
                  <div className="col-sm-4">
                    <input type="text" className="form-control" id="produtoUnidade" disabled placeholder="Unidade" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="quantidade" className="col-sm-2 col-form-label">
                    Quantidade
                  </label>
                  <div className="col-sm-4">
                    <input type="number" className="form-control" id="quantidade" placeholder="0,00" />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-sm-12 text-right">
                    <Button variant="contained" color="success">
                      Incluir
                    </Button>
                    <Button variant="contained" color="warning">
                      Alterar
                    </Button>
                    <Button variant="contained" color="error">
                      Excluir
                    </Button>
                  </div>
                </div>

                {/* Table inside the modal */}
                <div className="form-group">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>
                          <input type="checkbox" id="selectAll" />
                        </th>
                        <th>Produto</th>
                        <th>Descrição</th>
                        <th>Unidade</th>
                        <th>Quantidade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Itens da movimentação serão adicionados aqui */}
                    </tbody>
                  </table>
                </div>

                <div className="form-group text-right">
                  <Button variant="contained" color="primary">
                    Confirmar Movimentação
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Outros Modais, etc */}
    </div>
  );
}

export default Estoque;
