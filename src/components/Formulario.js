import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const Formulario = ({ crearTarea }) => {

    // crear State de Tareas
    const [tarea, actualizarTarea] = useState({
        nombre: '',
        apellido: '',
        fecha: '',
        hora:'',
        estado:'',
        detalle:''
    })

    // error
    const [error, actualizarError] = useState(false)

    // Funcion que se eecuta cada vez que el usuario escribe en un input
    const actualizarState = e => { 
        actualizarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    // Extraer los valores
    const { nombre, apellido, fecha, hora, estado, detalle } = tarea

    // Cuando el user presiona agregar tarea este se ejecuta
    const submitTarea = (e) => {
        e.preventDefault()
        
        console.log(tarea)

        // Validar el formulario
        if(nombre.trim() === '' || apellido.trim() === ''
        || fecha.trim() === '' || hora.trim() === '' 
        | estado.trim() === '' || detalle.trim() === ''){
            actualizarError(true)
            return;
        }

        // Eliminar el mensaje previo
        actualizarError(false)

        //Asignar un ID
        tarea.id = uuidv4()
        console.log(tarea)


        // Craer la nueva tarea
        crearTarea(tarea)

        // Reainicar el form
         actualizarTarea({
            nombre: '',
            apellido: '',
            fecha: '',
            hora:'',
            estado:'',
            detalle:''
        })

    }

    return ( 
        <>
        <h2>Crea una Tarea</h2>

        { error ? <p className="alert-error">Todos los campos son obligatorios</p> : null}


        <form
            onSubmit={submitTarea}
        >
            <label>Nombre del Dev</label>
            <input
                type="text"
                name="nombre"
                className="u-full-width"
                placeholder="Nombre del desarrollador"
                onChange={actualizarState}
                value={nombre}
             />

            <label>Apellido del Dev</label>
            <input
                type="text"
                name="apellido"
                className="u-full-width"
                placeholder="Nombre del desarrollador"
                onChange={actualizarState}
                value={apellido}
             />

            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
             />
              <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

            <label>Estado de la tarea</label>
            <input
                type="text"
                name="estado"
                className="u-full-width"
                placeholder="Estado de la tarea"
                onChange={actualizarState}
                value={estado}
             />

            <label>Detalle de la tarea</label>
            <textarea
                type="text"
                name="detalle"
                className="u-full-width"
                placeholder="Estado de la tarea"
                onChange={actualizarState}
                value={detalle}
             />
            <div>
             <button 
             type="submit"
             className="u-full-width button-primary">
                    Agregar tarea
             </button>
             </div>
 
        </form>
        </>
     );
}
 
export default Formulario;