var formulario = document.querySelector(".formulario");

formulario.onsubmit = function (e) {
  e.preventDefault();

  // Cambio: Evitar redefinición de la variable 'e'
  var nombreInput = formulario.elements[0];
  var edadInput = formulario.elements[1];
  var nacionalidadInput = formulario.elements[2];

  var nombre = nombreInput.value;
  var edad = edadInput.value;

  var i = nacionalidadInput.selectedIndex;
  var nacionalidad = nacionalidadInput.options[i].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    // Cambio: Agregar lógica para eliminar la clase de error si es corregido
    nombreInput.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    // Cambio: Agregar lógica para eliminar la clase de error si es corregido
    edadInput.classList.add("error");
  }

  // Cambio: Simplificar la condición usando operadores lógicos
  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";

// Cambio: Agregar salto de línea después del botón borrar
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  // Cambio: Obtener elemento existente "lista-de-invitados"
  var lista = document.getElementById("lista-de-invitados");

  // Cambio: Verificar si el elemento "lista-de-invitados" existe
  if (!lista) {
    console.error("Elemento 'lista-de-invitados' no encontrado en el HTML");
  } else {
    var elementoLista = document.createElement("div");
    elementoLista.classList.add("elemento-lista");
    lista.appendChild(elementoLista);

    // Cambio: Usar función para crear elementos
    crearElemento("Nombre", nombre, elementoLista);
    crearElemento("Edad", edad, elementoLista);
    crearElemento("Nacionalidad", nacionalidad, elementoLista);

    var botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Eliminar invitado";
    botonBorrar.id = "boton-borrar";

    // Cambio: Agregar salto de línea después del botón borrar
    var corteLinea = document.createElement("br");
    elementoLista.appendChild(corteLinea);
    elementoLista.appendChild(botonBorrar);

    // Cambio: Usar addEventListener para manejar eventos
    botonBorrar.addEventListener("click", function () {
      // Cambio: Verificar si el padre del botón existe antes de intentar eliminarlo
      if (this.parentNode) {
        this.parentNode.remove();
      }
    });
  }
}

// Cambio: Agregar argumento 'elementoLista' para indicar dónde agregar elementos
function crearElemento(descripcion, valor, elementoLista) {
  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = descripcion + ": ";
  inputNombre.value = valor;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);
}

function agregarInvitado(nombre, edad, nacionalidad) {


  // Cambio: Usar función para crear elementos
  crearElemento("Nombre", nombre, elementoLista);
  crearElemento("Edad", edad, elementoLista);
  crearElemento("Nacionalidad", nacionalidad, elementoLista);


}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

botonBorrar.onclick = function () {
  // this.parentNode.style.display = 'none';
  botonBorrar.parentNode.remove()
}


