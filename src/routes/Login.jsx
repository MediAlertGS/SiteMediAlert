import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./css/login/Login.css";
import visivelImg from "../img/visivel.png";
import invisivelImg from "../img/olho.png";
import logo from "../img/med_alert_prototipo.png";

export default function Login() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const carregarUsuarios = async () => {
      try {
        const resposta = await fetch("http://localhost:5000/usuarios");
        if (!resposta.ok) {
          throw new Error(`Erro: ${resposta.status}`);
        }
        const dados = await resposta.json();
        setUsuarios(dados);
      } catch (erro) {
        console.error(erro);
      }
    };

    carregarUsuarios();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
  
    const usuario = usuarios.find(
      (user) =>
        user.email.toLowerCase() === username.toLowerCase() &&
        user.senha === password
    );
  
    if (usuario) {
      alert("Login realizado com sucesso!");
      
      // Salvar os dados do usuário no sessionStorage
      sessionStorage.setItem('user', JSON.stringify({ nome: usuario.nome, email: usuario.email }));
      
      e.target.reset();
      navigate("/home");
  
      // Recarregar a página
      window.location.reload();
    } else {
      alert(
        "Nome de usuário ou senha incorretos. Por favor, tente novamente."
      );
    }
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div id="formularioPag">
      <div id="formularioLoginDiv">
        <img id="logoForm" src={logo} alt="Medi Alert logotipo" />
        <form onSubmit={handleLogin}>
          <div id="formsLogin">
            <label htmlFor="username">Email:</label>
            <input
              type="email"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div id="formsSenha">
            <label htmlFor="password">Senha:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              id="mostrarSenhaBtn"
              type="button"
              onClick={togglePasswordVisibility}
            >
              <img
                id="olho"
                src={showPassword ? invisivelImg : visivelImg}
                alt={showPassword ? "Ocultar Senha" : "Mostrar Senha"}
              />
            </button>
          </div>
          <div>
            <button id="loginBtn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
