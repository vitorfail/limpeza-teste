import React, { createContext, useState } from 'react';

const Context = createContext();

const UserProvider = ({ children }) => {
  const [popup_aviso, setpopup_aviso] = useState(false);


  return (
    <Context.Provider value={{ popup_aviso, setpopup_aviso }}>
      {children}
    </Context.Provider>
  );
};

export { UserProvider, Context };