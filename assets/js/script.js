
const tareas = [
    {
        id: 1,
        task: "hacer la cama",
        estado: false
    },
    {
        id: 2,
        task: "estuadiar css",
        estado: false
    },
    {
        id: 3,
        task: "lavar platos",
        estado: true
    },
    {
        id: 4,
        task: "terminar examen desafio",
        estado: false
    },
    {
        id: 5,
        task: "peinar la muñeca",
        estado: true
    }

];


/*****************************************************************
 * 
 * FUNCION QUE CREA EL HTML DE LA TABLA, CON LOS DATOS DE LA LISTA DE OBJETOS
 * 
 ****************************************************************/
function llenaTabla() {
    const listaTareas = document.getElementById("miTabla");
    const taskTotales = document.getElementById("txtTaskTotales");
    const taskRealizadas = document.getElementById("txtTaskRealizadas");

    let tabla = "";
    let okTareas = 0;

    tabla +=
        `<thead>
            <tr>
                <th width="30px;">ID</th>
                <th width="120px;">Tarea</th>
                <th width="20px;">**</th>
                <th width="20px;">**</th>
            </tr>
        </thead>
        `;

    for (const tarea of tareas) {
        tabla +=
            `<tbody >
            <tr>       
            `;
        if (`${tarea.estado}` === "true") {
            okTareas += 1;
            tabla +=
                `<td style="text-align: center; text-decoration: line-through; color: green;">${tarea.id}</td>
                        <td style="text-align: left; text-decoration: line-through; color: green;">${tarea.task}</td>
                        <td style="text-align: center;"><input onchange="functUpdateTask(${tarea.id});" type="checkbox" id="chk-okey" name="opcion" value="" checked></td>
                        `;

        } else if (`${tarea.estado}` === "false") {
            tabla +=
                `<td style="text-align: center;">${tarea.id}</td>
                        <td style="text-align: left;">${tarea.task}</td>
                        <td style="text-align: center;"><input onchange="functUpdateTask(${tarea.id});" type="checkbox" id="chk-okey" name="opcion" value=""></td>
                        `;
        }
        tabla +=
            `<td style="text-align: center;"><button onclick="functDelTask(${tarea.id});" class="material-symbols-outlined" style="color: red;">delete</button></td>
            </tr >
        </tbody >
        `;
    }
    listaTareas.innerHTML = tabla;
    taskTotales.innerHTML = `${tareas.length} `;
    taskRealizadas.innerHTML = Number(okTareas);
}


/*****************************************************************
 * 
 * FUNCION QUE AGREGA UNA TAREA A LA LISTA DE TAREAS
 * 
 ****************************************************************/
function functAddTask() {
    const agregaTarea = document.getElementById("txt-tarea");
    let ultimo = "";
    for (const ultimoId of tareas) {  // CICLO PARA OBTENER EL VALOR DEL ULTIMO ID.
        ultimo = `${ultimoId.id} `;
    }
    ultimo = Number(ultimo) + 1; // EL ULTIMO ID OBTENIDO, LE SUMAMOS 1.

    const nuevoObjetoTarea = {
        id: ultimo,             // EL ULTIMO MÁS 1, SE GUARDA EN EL OBJETO, COMO ID CORRELATIVO DE LA NUEVA TAREA AGREGADA.
        task: agregaTarea.value,
        estado: false
    }
    tareas.push(nuevoObjetoTarea);
    agregaTarea.value = "";
    llenaTabla();
}


/*****************************************************************
 * 
 * FUNCION QUE ELIMIA LA TAREA REGISTRADA
 * 
 ****************************************************************/
function functDelTask(key) {
    const pos = tareas.findIndex((tarea) => tarea.id === key);
    tareas.splice(pos, 1);
    llenaTabla();
}


/*****************************************************************
 * 
 * FUNCION QUE ACTUALIZA EL ESTADO DE LA TAREA REGISTRADA
 * 
 ****************************************************************/
function functUpdateTask(key) {
    const pos = tareas.findIndex((tarea) => tarea.id === key);

    let estadoChk = tareas[pos].estado;

    if (estadoChk === false) {
        tareas[pos].estado = true;
    } else if (estadoChk === true) {
        tareas[pos].estado = false;
    }

    //alert("actualizando estado... " + tareas[pos].estado);

    llenaTabla();
}

llenaTabla();