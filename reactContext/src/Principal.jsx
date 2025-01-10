import React, { useContext } from 'react';
import UserContext from './UserContext';

const MiComponente = () => {
  // Accedemos a los datos y funciones del contexto
  const { usuario, setUsuario, tema, setTema } = useContext(UserContext);

  return (
    <div>
      <h1>Gestión del Contexto</h1>
      <p>Tema actual: {tema}</p>
      <p>Usuario actual: {usuario ? usuario.nombre : 'No hay usuario autenticado'}</p>

      <button onClick={() => setUsuario({ nombre: 'Juan Pérez' })}>
        Iniciar Sesión
      </button>

      <button onClick={() => setTema(tema === 'claro' ? 'oscuro' : 'claro')}>
        Cambiar Tema
      </button>
    </div>
  );
};

export default MiComponente;