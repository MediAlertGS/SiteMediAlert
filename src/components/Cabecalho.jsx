import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './css/cabecalho/cabecalho.css';

export default function Cabecalho() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioSalvo = sessionStorage.getItem("user");
    if (usuarioSalvo) {
      const usuarioDecodificado = JSON.parse(usuarioSalvo);
      setUsuario(usuarioDecodificado);
    } else {
      // Caso não haja usuário salvo, limpa o estado para garantir que não haja dados residuais
      setUsuario(null);
    }
  }, [window.location]); // Adicionado window.location como dependência

  const handleLogout = () => {
    sessionStorage.clear();
    setUsuario(null);
    navigate("/");
  };

  return (
    <header>
      <ul>
        <li id="logo">JM</li>
        {usuario && (
          <>
          <div id="bv">
            <p id="nomeUser">Seja bem vindo(a) {usuario.nome}!</p>
            <p id="emailUser">{usuario.email}</p>
            <li>
              <button id="logoutBtn" onClick={handleLogout}>Sair</button>
            </li>
            </div>
           
          </>
        )}
        <li>Global Solution 2023 - Engenharia de Software</li>
      </ul>
    </header>
  );
}
