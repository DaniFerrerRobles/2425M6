import React, { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  // Declaración de estados globales
  const [usuario, setUsuario] = useState(null); // Estado del usuario
  const [tema, setTema] = useState('claro');   // Estado del tema

  return (
    // Proveedor que pasa los estados y funciones a través de `value`
    <UserContext.Provider value={{ usuario, setUsuario, tema, setTema }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;