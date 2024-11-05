import React, { useEffect, useState } from 'react';
import SecondsCounter from './SecondsCounter';

function Home() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);//Modificar la Velocidad de el tiempo para pruebas 
    return 
  }, []);

  return <SecondsCounter seconds={elapsedSeconds} />;
}

export default Home;
