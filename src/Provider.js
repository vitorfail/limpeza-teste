import React, { createContext, useState } from 'react';

const Context = createContext();

const UserProvider = ({ children }) => {
  const [popup_aviso, setpopup_aviso] = useState(false);
  const [ popup_conexao, setpopup_conexao] =useState(false)


  return (
    <Context.Provider value={{ popup_aviso, setpopup_aviso, popup_conexao, setpopup_conexao }}>
      {children}
    </Context.Provider>
  );
};

export { UserProvider, Context };