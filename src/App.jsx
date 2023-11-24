//import { useState } from 'react'
import React from 'react'
import { Outlet, useLocation } from "react-router-dom";

import './AppCss/App.css'
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';

function App() {
 
  return (
    <>
    <Cabecalho id="menu"/>
    <Outlet id="corpo" />
    <Rodape id="ropade" />
    </>
  )
}

export default App
