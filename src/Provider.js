import React, { createContext, useState } from 'react';

const Context = createContext();

const UserProvider = ({ children }) => {
  const [popup_aviso, setpopup_aviso] = useState(false);
  const [ popup_conexao, setpopup_conexao] =useState(false)
  const [popup_ok, setpopup_ok] = useState(false)
  const [popup, setpopup] = useState(false)


  return (
    <Context.Provider value={{ popup_aviso, setpopup_aviso, popup_conexao, setpopup_conexao, popup_ok, setpopup_ok, popup, setpopup }}>
      {children}
    </Context.Provider>
  );
};

export { UserProvider, Context };