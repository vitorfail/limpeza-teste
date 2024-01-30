import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rout from './rout';
import { UserProvider } from './Provider';
import PopupAviso from './popups/PopupAviso';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <PopupAviso></PopupAviso>
      <Rout />
    </UserProvider>
  </React.StrictMode>
);
