import React, {useState} from "react";

function FormularioUsuario() {
// crea un estado llamado name y su función de actualización setName. 
// Este estado almacena el valor ingresado por el usuario en el campo de texto.
    const [name, setName] = useState ("")
    // se ejecuta cada vez que el usuario escribe algo en el campo de texto.
    // El evento event contiene la información del evento, incluyendo el nuevo valor del campo de texto en event.target.value.
    // Actualizamos el estado nombre con el nuevo valor utilizando setNombre.
    const repeticion = (event) =>{
        setName(event.target.value);
    }
    const Prevent = (event) =>{
        event.preventDefault();
        alert(name);
    }
    return (
        <form onSubmit={Prevent}>
          <label>
            <p>NOMBRE:</p>
            <input type="text" value={name} onChange={repeticion} />
          </label>
          <button type="submit">Enviar</button>
        </form>
      );
}
export default FormularioUsuario;