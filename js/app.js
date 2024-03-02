let pendientes = [];

document.addEventListener("DOMContentLoaded", () => {
  getPendientes();
});

async function getPendientes() {
  const resultado = await fetch("../storage/pendientes.json");
  pendientes = await resultado.json();
  hola();
}
function hola() {
  //   console.log(pendientes);
  return pendientes;
}

const form = document.querySelector("#formulario");
form.addEventListener("submit", obtenerDatos);

function obtenerDatos(e) {
  e.preventDefault();
  const dataForm = new FormData(form);
  const tal = Object.fromEntries(dataForm);
  //   console.log(tal);

  const getjson = JSON.stringify(tal);
  console.log(getjson);
  //   return getjson;
  const datos = hola();
  datos.push(tal);
  console.log(datos);
}
