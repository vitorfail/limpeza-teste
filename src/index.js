import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rout from './rout';
import { UserProvider } from './Provider';
import Loading from './components/Loading';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Loading></Loading>
      <Rout />
    </UserProvider>
  </React.StrictMode>
);
