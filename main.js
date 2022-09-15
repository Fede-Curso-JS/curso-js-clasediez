// Clase con los parámetros requeridos para cada objeto
class NewsTasks {
    constructor(task, project, time, price) {
        this._task = task;
        this._project = project;
        this._time = time;
        this._price = price;
    }
}
// Obtenemos y ejecutamos la función al hacer click sobre el botón de Agregar Tarea
const addNewTask = document.querySelector('#addTask');
addNewTask.addEventListener('click', addTask);

// Creamos un nuevo objeto, en el cual almacenamos/validamos con condicionales e imprimimos en el DOM
function addTask() {
    let TaskOne = new NewsTasks(prompt('¿Qué tarea estas realizando?'), 
    prompt('¿Para qué proyecto estás realizando esta tarea?'),
    prompt('¿Cuantas horas te llevó hacerla?'),
    prompt('¿Cuál es el monto en USD que cobrás por hora?'));

    if (TaskOne._task && TaskOne._project && !isNaN(TaskOne._time) && !isNaN(TaskOne._price)) {
        let newTasks = document.createElement('div');

        document.querySelector('#tasks').append(newTasks);
        newTasks.innerHTML = `<h2>${TaskOne._project}</h2>
        <a href="#" class="active"><input type="checkbox" checked=checked> ${TaskOne._task}</a>
        <p> Trabajó ${TaskOne._time}hs</p>
        <p> Cobró ${TaskOne._price} U$D por hora</p>`;
        
        newTasks.classList.add('tasks');

        // Almacenamos los valores de su ULTIMA tarea en su localstorage
        localStorage.setItem('tarea', TaskOne._task);
        localStorage.setItem('proyecto', TaskOne._project);
        localStorage.setItem('tiempo', TaskOne._time);
        localStorage.setItem('precio', TaskOne._price);
        setTimeout(() => {
            alert('¡Se registró tu tarea en nuestra base de datos!');
        }, 700);

    } else {
        let error = document.createElement('error');
        document.querySelector('#tasks').append(error);
        error.innerHTML = `<div class="error">
        <h2>¡Tenés que ingresar los datos correctamente para poder agregar tu tarea a nuestra base de datos!</h2>
        </div>`
        // Ejecutamos un setTimeout para que cuando muestre el error 3 segundos después se elimine automáticamente
        setTimeout(() => {
            error.style.display = 'none'
        }, 3000);
    };
};

const registroDeTarea = JSON.stringify(localStorage.getItem('tarea'));
const registroDeProyecto = JSON.stringify(localStorage.getItem('proyecto'));
const registroDeTiempo = JSON.parse(localStorage.getItem('tiempo'));
const registroDePrecio = JSON.parse(localStorage.getItem('precio'));
console.log(`Su última tarea realizada fue ${registroDeTarea}.`);
console.log(`Trabajó en su último proyecto llamado ${registroDeProyecto}.`);
console.log(`Registró un total de ${registroDeTiempo} horas realizadas en esta tarea.`);
console.log(`Cobró un total de ${registroDePrecio} la hora.`);



 // Ejecutamos la función con un botón para mostrarle al cliente los datos, en el caso que no cumpla TODOS los parámetros pedidos por la condicional no se ejecuta y te pide
// volver a ejecutar el programa, si el tiempo y el precio no son números tampoco va a validar como que está correcta, si o si tienen que pasarles un número como parámetro
// function Task() {
//     if (Tasks.task && Tasks.project && !isNaN(Tasks.time) && !isNaN(Tasks.price)){
//         let totalPrice = Tasks.time * Tasks.price; 
//         alert(`¡Ya registramos tu tarea en nuestra base de datos!
        
// Trabajaste en el ${Tasks.task} para ${Tasks.project}, con un total de ${Tasks.time}hs a un precio de ${Tasks.price}U$D por hora. El total de U$D ganados por este proyecto es de ${totalPrice}U$D.`);
        
         // Una vez ya ejecutado y habiendole mostrado el resultado de su tarea al cliente ejecutamos la función de Conversión de monedas de U$D a ARS (pesos Argentinos)
//         Convertor();
//     } else {
//         alert(`¡No ingresaste los datos suficientas para crear una tarea!
// Volvé a intentarlo`);
        // Recargar web en el caso que no haya ingresado los datos pedidos
//         location.reload();
//     }
// }

// En el caso que el usuario lo desee, convierte sus U$D a ARS con esta función
// function Convertor() {
//     let usd = Tasks.time * Tasks.price;
//     let ars = 137;
//     let convertorUSD = usd * ars;
    
//     let convertor = prompt('¿Querés convertir esos U$D a ARS? (Si / No)');
//     if (convertor == "Y" || convertor == "y" || convertor == "Si" || convertor == "SI" || convertor == "si" || convertor == "S" || convertor == "s") {
//         alert(`Te informamos que el Dólar Oficial hoy 01/09/2022 es igual $137 ARS`);
//         alert(`Los ingresos obtenidos por el ${Tasks.task} es un total de ${convertorUSD} Pesos Argentinos.`);
//     } else {
//         alert(`¡Perfecto! El total obtenido por ${Tasks.project} seguirá siendo de ${usd}U$D.`);
//     };
// };

// Valida todos estos campos y si es correcto se ejecuta una nueva tarea, en el caso que 
// el programa no logre validarlo correctamente ejecuta un error mediante un div
// if (Tasks.task && Tasks.project && !isNaN(Tasks.time) && !isNaN(Tasks.price)) {
//     const newTask = document.createElement('div');
//     document.querySelector('#tasks').append(newTask);
//     newTask.innerHTML = `<h2>${Tasks.project}</h2>
//     <a href="#" class="active"><input type="checkbox" checked=checked> ${Tasks.task}</a>
//     <a href="#"> Trabajó ${Tasks.time}hs</a>
//     <a href="#"> Cobró ${Tasks.price} U$D por hora</a>`;

//     newTask.classList.add('tasks');
// } else {
//     const error = document.createElement('error');
//     document.querySelector('#tasks').append(error);
//     error.innerHTML = `<div class="error">
//     <h2>¡Tenés que ingresar los datos correctamente para poder agregar tu tarea a nuestra base de datos!</h2>
// </div>`
// };

// Creamos un array vacío para luego almacenar los datos ingresados por el usuario dentro del array.
// const thingsToDo = [];

// thingsToDo.push(Tasks.task.toLowerCase());
// thingsToDo.push(Tasks.project);
// thingsToDo.push(Tasks.time);
// thingsToDo.push(Tasks.price);

// Recorremos todo el array con los valores del objeto ya colocados e imprimos el número de índice en cuál se encuentra coda uno.
// const forEachArray = thingsToDo.forEach((e, i) => {
//     console.log(`${e} se encuentra en el índice ${i}`);
// });

// Buscamos en el array y retornamos la primera coincidencia encontrada
// const findArray = thingsToDo.find(e => e > 2)
// console.log(findArray);