import React, { useState } from 'react';

function Formulario({ Number }) {
  const [numero, setNumero] = useState('');

  const Actualizar = (event) => {
    setNumero(event.target.value);
    Number(event.target.value);
  };

  return (
    <form>
      <label>
        Número:
        <input type="number" value={numero} onChange={Actualizar} />
      </label>
    </form>
  );
}

export default Formulario;