import React from "react";
import '../styles.css'; // Certifique-se de que este caminho está correto

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const nome = event.target.nome.value;
    const senha = event.target.senha.value;

    // Aqui faria a requisição para login (API)
    console.log({ nome, senha });
    alert('Login bem-sucedido');
  };

  return (
    <div className="background">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" placeholder="Nome" required />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" placeholder="Senha" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
