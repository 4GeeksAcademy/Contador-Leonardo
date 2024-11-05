import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function SecondsCounter({ seconds }) {
  const minutos = Math.floor(seconds / 60); // Minutos
  const minutosDecena = Math.floor(minutos / 10); // Decenas de minutos
  const minutosUnidades = minutos % 10; // Unidades de minutos
  const segundos = Math.floor(seconds % 60); // Segundos
  const segDecena = Math.floor(segundos / 10); // Decenas de segundos
  const segUnidades = segundos % 10; // Unidades de segundos

  return (
    <div  className="container">
      <div className="row">
        <div id="contador" className="col-12 col-md-8 mx-auto mt-5 text-center">
          <h1> Contador de tiempo</h1>
          <p>
            <FontAwesomeIcon icon={faClock} />
            <span className="minutes">
              <span className="minsTens Digito">{`${minutosDecena}`}</span>
              <span className="minsUnits Digito">{`${minutosUnidades}`}</span>
            </span>
            :
            <span className="seconds">
              <span className="secsTens Digito">{`${segDecena}`}</span>
              <span className="secsUnits Digito">{`${segUnidades}`}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondsCounter;
