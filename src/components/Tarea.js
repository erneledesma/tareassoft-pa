import React from 'react'

const Tarea = ({tarea , eliminarTarea }) => {

    const {nombre, apellido, fecha, hora, estado, detalle} = tarea

   
    return ( 
        <div className="tarea">
            <p>Nobre del Dev: <span>{nombre}</span></p>
            <p>Apellido del Dev: <span>{apellido}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Estado de la tarea: <span>{estado}</span></p>
            <p>Detalle de la tarea: <span>{detalle}</span></p>

            <button 
             className="button eliminar u-full--width"
             onClick={() => eliminarTarea(tarea.id)}
             >
                Eliminar Tarea
            </button>

        </div>
     );
}
 
export default Tarea;