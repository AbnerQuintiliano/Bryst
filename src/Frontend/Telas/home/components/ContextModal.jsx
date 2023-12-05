import React, { createContext, useContext, useState } from 'react';

const ContextModal = createContext();

export const ContextModalProvider = ({ children }) => {
   const [Modais, setModais] = useState(false);

   const attValueModais = () => {
      setModais(!Modais);
   };

   return (
      <ContextModal.Provider value={{ Modais, attValueModais }}>
         {children}
      </ContextModal.Provider>
   );
};

export const useContextModal = () => {
   return useContext(ContextModal);
};