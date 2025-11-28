
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
        estado: false
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
    },
    {
        id: 6,
        task: "bañar perrito",
        estado: false
    },
    {
        id: 7,
        task: "comer",
        estado: false
    },
    {
        id: 8,
        task: "peinar la muñeca",
        estado: false
    },
    {
        id: 9,
        task: "bañar perrito",
        estado: false
    },
    {
        id: 10,
        task: "comer",
        estado: false
    }

];


function llenaTabla() {
    const listaTareas = document.getElementById("miTabla");
    const taskTotales = document.getElementById("txtTaskTotales");
    const taskRealizadas = document.getElementById("txtTaskRealizadas");

    let tabla = "";
    /* let totTareas = ""; */
    let okTareas = "";

    tabla +=
        `
    <tr>
        <th width="30px;">ID</th>
        <th width="120px;">Tarea</th>
        <th width="20px;">**</th>
        <th width="20px;">**</th>
    </tr>
    `;

    for (const tarea of tareas) {
        tabla += /* `${tarea.task}`; */
            `<tr>    
            <td style="text-align: center;">${tarea.id}</td>
             <td style="text-align: left;">${tarea.task}</td>
             <td style="text-align: center;"><input onchange="functOkTask();" type="checkbox" id="chk-okey" name="opcion" value="ejemplo"></td>
             <td style="text-align: center;"><button onclick="functDelTask();" class="material-symbols-outlined" ="#EA3323">delete</button></td>
        </tr>  
        `;
    }
    listaTareas.innerHTML = tabla;
    taskTotales.innerHTML = `${tareas.length}`;


    //console.log(tabla);
    //console.log(tareas.length);
}


function functAddTask() {
    alert("tarea agregada...")
}

function functDelTask(key) {
    alert("tarea eliminada...");
}

function functOkTask() {
    alert("tarea terminada");
}

/*
const agregaTarea = function () {
    const txtNuevaTarea = document.querySelector('#');
}
*/

llenaTabla();

