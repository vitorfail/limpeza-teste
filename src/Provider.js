import React, { createContext, useState } from 'react';

const Context = createContext();

const UserProvider = ({ children }) => {
  const [popup_aviso, setpopup_aviso] = useState(false);
  const [ popup_conexao, setpopup_conexao] =useState(false)
  const [popup_ok, setpopup_ok] = useState(false)
  const [popup, setpopup] = useState(false)
  const [pesquisa, setpesquisa] = useState([])
  const [popup_ordem, setpopup_ordem] = useState(false)
  const [ordem, setordem]= useState([])
  const [loading, setloading]= useState(false)


  return (
    <Context.Provider value={{ 
        popup_aviso, setpopup_aviso, 
        popup_conexao, setpopup_conexao, 
        popup_ok, setpopup_ok, 
        popup, setpopup, 
        pesquisa, setpesquisa, 
        popup_ordem, setpopup_ordem,
        ordem, setordem,
        loading, setloading
      }}>
      {children}
    </Context.Provider>
  );
};

export { UserProvider, Context };