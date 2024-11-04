import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function SecondsCounter({ seconds }) {
  const minutes = Math.floor(seconds / 60); // minutos
  const secs = Math.floor(seconds % 60); // segundos
  const secsTens = Math.floor(secs / 10); // Dígito de las decenas
  const secsUnits = secs % 10; // Dígito de las unidades

  return (
    <div>
      <h1><FontAwesomeIcon icon={faClock} /> Contador de tiempo</h1>
      <p>
        <span className="minutes">{`${minutes}`.padStart(2, '0')}</span>
        :
        <span className="seconds">
          <span className="secsTens">{`${secsTens}`}</span>
          <span className="secsUnits">{`${secsUnits}`}</span>
        </span>
      </p>
    </div>
  );
}

export default SecondsCounter;
