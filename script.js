let contador = 0;

const numero = document.querySelector("#numero");

const botonSumar = document.querySelector("#btn-sumar");
const botonRestar = document.querySelector("#btn-restar");
const botonReset = document.querySelector("#btn-reset");
const botonSaludar = document.querySelector("#btn-saludar");
function pintarContador() {
  numero.textContent = contador;
}

botonSumar.addEventListener("click", function () {
  contador++;
  pintarContador();
});

botonRestar.addEventListener("click", function () {
  contador--;
  pintarContador();
});

botonReset.addEventListener("click", function () {
  contador = 0;
  pintarContador();
});

botonSaludar.addEventListener("click", function () {
  mensaje.textContent = "¡Hola!";
});

const mensaje = document.querySelector("#mensaje");

const inputTarea = document.querySelector("#input-tarea");
const botonAgregar = document.querySelector("#btn-agregar");
const lista = document.querySelector("#lista-tareas");

const tareas = [];

function renderTareas() {
  lista.innerHTML = "";

  for (const tarea of tareas) {
    const li = document.createElement("li");
    li.textContent = tarea;
    lista.appendChild(li);
  }
}

botonAgregar.addEventListener("click", function () {
  const texto = inputTarea.value.trim();

  if (texto === "") {
    mensaje.textContent = "Escribe una tarea antes de agregar.";
    return;
  }

  tareas.push(texto);
  renderTareas();

  inputTarea.value = "";
  mensaje.textContent = "Tarea agregada correctamente.";
});


const botonTema = document.querySelector("#btn-tema");
const panel = document.querySelector(".panel");

botonTema.addEventListener("click", function () {
  panel.classList.toggle("panel-oscuro");
});