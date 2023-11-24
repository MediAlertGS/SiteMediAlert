import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './css/Home/Home.css'
import fotoPrincipal from '../img/idoso_logo.png'

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isUserLoggedIn = () => {
      return sessionStorage.getItem('user') !== null;
    };

    if (!isUserLoggedIn()) {
      // Redireciona para a página de erro ou login
      navigate('/'); // Ou para '/login', dependendo da sua preferência
    }
  }, [navigate]); // Adicione navigate como dependência do useEffect

  return (
    <div id="paginaHome">
      <div id="imgProd">
        <img id="fotoIdoso" src={fotoPrincipal} alt="fotoDeUmIdoso" />
      </div>
      <div id="oqSolucao">
        <h1>Qual é a nossa solução?</h1>
        <p id="solucaoTxt">
        MediAlert: O assistente inteligente para seu 
        tratamento médico, simplificando lembretes de 
        medicamentos e mantendo cuidadores atualizados. 
        Prático, eficiente e confiável.
        </p>
      </div>
      <div id="oqFara">
        <h1>O que faremos</h1>
        <p id="oqFaraTxt">MediAlert promete melhorar 
        significativamente a adesão ao tratamento médico, 
        reduzindo os riscos associados ao esquecimento de 
        medicamentos. Ao oferecer lembretes personalizados 
        para cada dose, o aplicativo assegura que os usuários 
        tomem seus medicamentos no horário correto. Em 
        situações de emergência, como uma queda, o usuário 
        pode utilizar o botão de emergência integrado para 
        notificar imediatamente os cuidadores, garantindo uma 
        resposta rápida e eficiente</p>
      </div>
      <div id="comoFuncionara">
        <h1>Como funcionara</h1>
        <p id="comoFuncionaraTxt">Os usuários do MediAlert 
        podem facilmente adicionar todos os seus medicamentos 
        no aplicativo, especificando o nome, dosagem e horários
         de ingestão. O aplicativo então envia lembretes 
         automáticos quando é hora de tomar cada medicamento. 
         Em caso de não confirmação da ingestão, os cuidadores 
         são alertados. Além disso, o aplicativo está equipado 
         com um sensor de queda, que detecta quedas e aciona 
         automaticamente um alerta para os cuidadores. O botão 
         de emergência oferece uma camada adicional de 
         segurança, permitindo que o usuário avise seus 
         cuidadores em situações críticas.</p>
      </div>
      <div id="textoSobre">
        <p id="sobreTxt">O MediAlert, um assistente inteligente 
        inovador, transforma o tratamento médico ao simplificar a 
        administração de medicamentos. Com lembretes precisos, ele 
        assegura a adesão correta ao regime de medicação, crucial 
        para a eficácia do tratamento.</p>
      </div>
      <button id="maisInfo">Mais informações</button>
      <div id="tituloSolucao">
        <p id="txtTitulo">O assistente da sua saúde</p>
      </div>
      <div id="solucao">
        <p id="txtSolucao">Além disso, o MediAlert oferece recursos 
        adicionais para segurança do usuário, incluindo um botão de 
        emergência e um sensor de queda. Essas funcionalidades garantem 
        uma resposta rápida em situações críticas, mantendo os 
        cuidadores constantemente atualizados e tranquilos.</p>
      </div>
      <div id="vantagens">
        <div id="vantagem1" className="vantagem">
          <h1>Lembretes Confiáveis para Medicamentos:</h1>
          <p id="vantagensTxt1" className="vantagensTxt">
          "Com o MediAlert, esquecer de tomar medicamentos torna-se 
          coisa do passado. Lembretes personalizados garantem adesão 
          ao tratamento e controle de saúde eficaz."
          </p>
        </div>
        <div id="vantagem2" className="vantagem">
        <h1>Segurança Extra com Alertas de Emergência:</h1>
        <p id="vantagensTxt2" className="vantagensTxt">
        "O botão de emergência e o sensor de queda do MediAlert oferecem 
        segurança adicional, permitindo respostas rápidas em situações 
        críticas, proporcionando tranquilidade aos usuários e cuidadores."
        </p>
        </div>
        <div id="vantagem2" className="vantagem">
        <h1>Conectividade entre Usuários e Cuidadores:</h1>
        <p id="vantagensTxt3" className="vantagensTxt">
        "MediAlert estreita a comunicação entre usuários e cuidadores. 
        Através de notificações automáticas, mantém os cuidadores informados 
        sobre a adesão ao tratamento e possíveis emergências."
        </p>
        </div>
      </div>
    </div>
  );
}
