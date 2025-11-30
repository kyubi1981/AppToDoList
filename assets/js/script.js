
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
        estado: false
    }

];


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
                <td style="text-align: center;">${tarea.id}</td>
                <td style="text-align: left;">${tarea.task}</td>
                <td style="text-align: center;"><input onchange="functOkTask(${tarea.id});" type="checkbox" id="chk-okey" name="opcion" value=""></td>
                <td style="text-align: center;"><button onclick="functDelTask(${tarea.id});" class="material-symbols-outlined" style="color: red;">delete</button></td>
            </tr>  
        </tbody>
        `;

        if (`${tarea.estado}` === true) {
            okTareas += 1;
            alert(okTareas);
        }
    }
    listaTareas.innerHTML = tabla;
    taskTotales.innerHTML = `${tareas.length}`;

    //alert("tareas listas... " + Number(okTareas));

    taskRealizadas.innerHTML = Number(okTareas);


    //console.log(tabla);
    //console.log(tareas.length);
}

function functAddTask() {
    const agregaTarea = document.getElementById("txt-tarea");

    let ultimo = "";

    for (const ultimoId of tareas) {
        ultimo = `${ultimoId.id}`;
    }

    ultimo = Number(ultimo) + 1;

    //alert("el ultimo id es " + ultimo);

    const nuevoObjetoTarea = {
        id: ultimo,
        task: agregaTarea.value,
        estado: false
    }
    tareas.push(nuevoObjetoTarea);

    agregaTarea.value = "";

    llenaTabla();
}

function functDelTask(key) {

    //alert("tarea eliminada..." + key);

    const pos = tareas.findIndex((tarea) => tarea.id === key);

    //alert("posicion es... " + pos);

    tareas.splice(pos, 1);

    llenaTabla();

}

function functOkTask(dato) {

    alert("tarea terminada " + dato);

    for (const tarea of tareas) {

        if (`${tarea.estado}` === true) {
            okTareas += 1;
        }
    }

    const pos = tareas.findIndex((tarea) => tarea.id === key);

    //alert("posicion es... " + pos);

    tareas.splice(pos, 1);

    llenaTabla();
}


llenaTabla();