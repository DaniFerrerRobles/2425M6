import React from 'react';
import CardPerson from '../components/CardPerson';

const About = () => {
  const personas = [
    { nombre: 'Juan Pérez', edad: 30, profesion: 'Desarrollador Web', foto: 'https://via.placeholder.com/150' },
    { nombre: 'Ana López', edad: 25, profesion: 'Diseñadora Gráfica', foto: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="container">
      <h2>Acerca de</h2>
      <div className="row">
        {personas.map((persona, index) => (
          <div key={index} className="col-md-4">
            <CardPerson nombre={persona.nombre} edad={persona.edad} profesion={persona.profesion} foto={persona.foto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;