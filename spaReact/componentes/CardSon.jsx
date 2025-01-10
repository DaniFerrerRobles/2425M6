import React from 'react';

const CardPerson = ({ nombre, edad, profesion, foto }) => (
  <div className="card card-custom" style={{ width: '18rem' }}>
    <img src={foto} className="card-img-top" alt={nombre} />
    <div className="card-body">
      <h5 className="card-title">{nombre}</h5>
      <p className="card-text">
        <strong>Edad:</strong> {edad} años<br />
        <strong>Profesín:</strong> {profesion}
      </p>
    </div>
  </div>
);

export default CardPerson;