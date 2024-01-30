import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rout from './rout';
import { UserProvider } from './Provider';
import PopupAviso from './popups/PopupAviso';
import PopupAvisoConexao from './popups/PopupConexao';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <PopupAvisoConexao></PopupAvisoConexao>
      <PopupAviso></PopupAviso>
      <Rout />
    </UserProvider>
  </React.StrictMode>
);
