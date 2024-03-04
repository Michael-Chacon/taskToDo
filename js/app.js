import { getData } from "../Api/core.js";
import { postData } from "../Api/core.js";
import { deleteData } from "../Api/core.js";
import { getOneData } from "../Api/core.js";

const dialog = document.querySelector("dialog");

const mostraDialog = document.querySelector(".mostarModal");
mostraDialog.addEventListener("click", () => {
  dialog.showModal();
});

const cerrarDialog = document.querySelector(".cancelar");
cerrarDialog.addEventListener("click", () => {
  dialog.close();
});

document.addEventListener("DOMContentLoaded", async () => {
  const tasks = await getData("pendientes");
  const tasksEnded = await getData("cumplidas");
  const tasksFailed = await getData("fallidas");

  const success = document.querySelector("#tasksOk");
  const fail = document.querySelector("#tasksFaild");

  filterTaskd(success, tasksEnded);
  filterTaskd(fail, tasksFailed);
  showTask(tasks);
});

const form = document.querySelector("#formulario");
form.addEventListener("submit", obtenerDatos);

function obtenerDatos(e) {
  e.preventDefault();
  const dataForm = new FormData(form);
  const datos = Object.fromEntries(dataForm);
  postData(datos, "pendientes");
}

const cards = document.querySelector(".cards");
cards.addEventListener("click", detectarBoton);

function showTask(data) {
  data.forEach((item) => {
    cards.innerHTML += /*html*/ `
    <article class="card">
    <div class="opciones">
      <i class='bx bx-check btnEnded' id="${item.id}"></i>
      <small><span class="span-prioridad ${
        item.prioridad === "urgente" ? "span-urgente" : "span-noUrgente"
      } ">${item.prioridad}</span></small>
      <i class='bx bx-x btnFailed' id="${item.id}"></i>
    </div>
    <p class="textTask">${item.tarea}</p>
    <div class="inicio-fin">
        <div class="texto-fechas">
          <p>Inicio</p>
          <p>${item.inicio}</p>
        </div>
        <div class="texto-fechas">
          <p>Fin</p>
          <p>${item.fin}</p>
        </div>
    </div>
    <div class="info-responsable">
      <p>${item.responsable}</p>
      <img src="storage/img/foto.jpg" alt="" class="foto">
    </div>
  </article>
    `;
  });
}

function filterTaskd(contenedor, tareas) {
  tareas.forEach((item) => {
    contenedor.innerHTML += `
    <article class="card tar-fallidas">
    <div class="opciones">
     
      <small><span class="span-prioridad ${
        item.prioridad === "urgente" ? "span-urgente" : "span-noUrgente"
      } ">${item.prioridad}</span></small>
      
    </div>
    <p class="textTask">${item.tarea}</p>
    <div class="inicio-fin">
        <div class="texto-fechas">
          <p>Inicio</p>
          <p>${item.inicio}</p>
        </div>
        <div class="texto-fechas">
          <p>Fin</p>
          <p>${item.fin}</p>
        </div>
    </div>
    <div class="info-responsable">
      <p>${item.responsable}</p>
      <img src="storage/img/foto.jpg" alt="" class="foto">
    </div>
  </article>
    `;
  });
}

async function detectarBoton(e) {
  if (e.target.classList.contains("btnEnded")) {
    const id = e.target.id;
    console.log(id);
    const resultado = await getOne(id);
    console.log(resultado);
    postData(resultado, "cumplidas");
    deleteData(id);
  } else if (e.target.classList.contains("btnFailed")) {
    const id = e.target.id;
    const resultado = await getOne(id);
    console.log(resultado);
    postData(resultado, "fallidas");
    deleteData(id);
  }
}

async function getOne(id) {
  return await getOneData(id);
}
