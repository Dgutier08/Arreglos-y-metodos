const tareas = [
    { id: 1, description: "trabajar", estado: false },
    { id: 2, description: "estudiar", estado: false },
    { id: 3, description: "trabajar aun mas", estado: false },
  ];
//agrega tareas
  const agregarTarea = document.querySelector("#agregarTarea");
  const nuevaTarea = document.querySelector("#nuevaTarea");
  
  agregarTarea.addEventListener("click", () => {
    console.log("validación btnaddTarea");
  
    if (nuevaTarea.value === "") {
      console.log("entro validación");
      alert("Debe ingresar una tarea");
      return;
    }
  
    if (tareas.length === 0 ){
      tareas.push({id:1, description: nuevaTarea.value, estado: false});
    }
    else { 
      let asignacionId = tareas[tareas.length-1].id+1;
      const addTareas = {
          id: asignacionId,
          description: nuevaTarea.value,
          estado: false,
        };
        tareas.push(addTareas);
       }
  
      nuevaTarea.value = "";
    renderTareas();
  });

  //borrar tarea
  borrar = (id) =>{
    let idTareas = tareas.findIndex((tarea) => tarea.id === id);
    tareas.splice(idTareas, 1);
    renderTareas();
  }
  
   cambiar = (id) =>{ 
      let idTareas = tareas.findIndex((tarea) => tarea.id === id);
            if (tareas[idTareas].estado === true) {
          const objeto = {
              id: tareas[idTareas].id,
              description: tareas[idTareas].description,
              estado: false,
            };
            tareas.splice(idTareas, 1, objeto);
          
        
        }else {
          const objeto = {
              id: tareas[idTareas].id,
              description: tareas[idTareas].description,
              estado: true,
            };
            tareas.splice(idTareas, 1, objeto);
        }
        renderTareas();
  }

  //render listado de tareas
  const listaTareas = document.querySelector(".listaTareas");
  const renderTareas = () => {
    let html = "";
    let html2 = "";
    for (const tarea of tareas) {
      html2 = tarea.estado ? 
      `<input class="checkbox" type="checkbox" onclick="cambiar(${tarea.id})" checked="true">`
      : `<input class="checkbox" type="checkbox" onclick="cambiar(${tarea.id})" >`;
      html += `<tr>
          <td>${tarea.id}</td>
          <td>${tarea.description}</td>
          <td>${html2}<button onclick="borrar(${tarea.id})">x</button></td>
        </tr>`;
    }
    listaTareas.innerHTML = html;
    let span = document.querySelector("#totalTarea");
    let contadorTareas = tareas.length;
    span.innerHTML = contadorTareas;
  
    let filtroTareas = tareas.filter((tarea) => tarea.estado == true);
    let span2 = document.querySelector("#trealizadas");
    span2.innerHTML = filtroTareas.length;
  };
  renderTareas();
  