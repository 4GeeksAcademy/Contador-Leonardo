import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function SecondsCounter({ seconds }) {
  const horas = Math.floor(seconds / 3600); // Horas
  const horasDecena = Math.floor(horas / 10); // Decenas de horas
  const horasUnidades = horas % 10; // Unidades de horas
  const minutos = Math.floor((seconds % 3600) / 60); // Minutos restantes después de calcular las horas
  const minutosDecena = Math.floor(minutos / 10); // Decenas de minutos
  const minutosUnidades = minutos % 10; // Unidades de minutos
  const segundos = seconds % 60; // Segundos restantes después de calcular horas y minutos
  const segDecena = Math.floor(segundos / 10); // Decenas de segundos
  const segUnidades = segundos % 10; // Unidades de segundos

  return (
    <div className="container">
      <div className="row">
        <div id="contador" className="col-12 col-md-8 mx-auto mt-5 text-center">
          <h1> Contador de tiempo</h1>
          <p>
            {/* Icono de reloj */}
            <FontAwesomeIcon icon={faClock} />
            {/* Horas */}
            <span>
              <span className="Digito">{`${horasDecena}`}</span>
              <span className="Digito">{`${horasUnidades}`}</span>
            </span>
            :
            {/* Minutos */}
            <span>
              <span className="Digito">{`${minutosDecena}`}</span>
              <span className="Digito">{`${minutosUnidades}`}</span>
            </span>
            :
            {/* Segundos */}
            <span>
              <span className="Digito">{`${segDecena}`}</span>
              <span className="Digito">{`${segUnidades}`}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondsCounter;