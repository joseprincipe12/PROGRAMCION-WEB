
const formulario = document.querySelector("#formulario");

// crear el evento
formulario.addEventListener("submit", validarFormulario);

// mis funciones
function validarFormulario(event) {
  event.preventDefault(); // Evita que el formulario se envíe por defecto.

  const nombre = document.querySelector("#nombre").value;
  const edad = document.querySelector("#edad").value;

  let respuesta = document.getElementById("respuesta");

  if (!respuesta) {
    respuesta = document.createElement("div");
    respuesta.id = "respuesta";
    formulario.appendChild(respuesta);
  }

  respuesta.textContent = `Hola ${nombre}, tienes la edad de ${edad}`;
}



