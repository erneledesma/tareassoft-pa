import React,{ useState, useEffect }from 'react';
import './App.css';
import './index.css';
import Formulario from './components/Formulario'
import Tarea from './components/Tarea'

function App() {

  // Tareas en el localStorage 
  let tareasIniciales = JSON.parse(localStorage.getItem('tareas'));
  if(!tareasIniciales){
    tareasIniciales = [];
  }

  // Arreglo de tareas
  const [ tareas, guardarTareas ] = useState(tareasIniciales);

  // UseEffect para realizar ciertas operaciones cuando el State cambia 
    useEffect(() => {
      let tareasIniciales = JSON.parse(localStorage.getItem('tareas'));

    if(tareasIniciales) {
      localStorage.setItem('tareas', JSON.stringify(tareas))
    }else {
      localStorage.setItem('tareas', JSON.stringify([]))
    }
    
    },[tareas])

  // Funcion que tome las tareas y agregue una nueva
  const crearTarea = tarea => {
    guardarTareas([
      ...tareas,
      tarea
    ])
  }

  // funcion que elimina las tareas
  const eliminarTarea = id => {
    const nuavasTareas = tareas.filter( tarea => tarea.id !== id )
    guardarTareas(nuavasTareas);
  }
  

  // mensaje 
  const titulo = tareas.length === 0 ? 'No hay tareas' : 'Administra tus tareas'
  
  return (
    <>
      <h1> Administra tus Proyectos</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario 
               crearTarea={crearTarea}
              />
          </div>

          <div className="one-half column">
          <h2>{titulo}</h2>
          {tareas.map(tarea =>(
            <Tarea 
              key={tarea.id}
              tarea={tarea}
              eliminarTarea={eliminarTarea}
            />
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
