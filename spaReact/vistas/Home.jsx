import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

const Home = () => {
  const { setUsuario } = useContext(UserContext);
  const [nombre, setNombre] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    setUsuario({ nombre });
    setNombre('');
  };

  return (
    <div className="container">
      <h2>Introducir Usuario</h2>
      <form onSubmit={manejarSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Guardar Usuario</button>
      </form>
    </div>
  );
};

export default Home;