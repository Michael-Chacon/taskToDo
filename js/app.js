import { getData } from "../Api/core.js";
import { postData } from "../Api/core.js";
import { deleteData } from "../Api/core.js";
import { getOneData } from "../Api/core.js";

document.addEventListener("DOMContentLoaded", async () => {
  const tasks = await getData("pendientes");
  const tasksEnded = await getData("cumplidas");
  const tasksFailed = await getData("fallidas");
  showTask(tasks);
  showTasksEnded(tasksEnded);
  showTaskFailded(tasksFailed);
});

const form = document.querySelector("#formulario");
form.addEventListener("submit", obtenerDatos);

function obtenerDatos(e) {
  e.stopImmediatePropagation();
  e.preventDefault();
  const dataForm = new FormData(form);
  const tal = Object.fromEntries(dataForm);
  postData(tal, "pendientes");
}

const cards = document.querySelector(".cards");
cards.addEventListener("click", detectarBoton);

function showTask(data) {
  data.forEach((item) => {
    cards.innerHTML += `
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
    // const li = document.createElement("LI");
    // const btnEnded = document.createElement("BUTTON");
    // const btnFailed = document.createElement("BUTTON");
    // btnEnded.id = item.id;
    // btnEnded.classList.add("btnEnded");
    // btnEnded.textContent = "Ended";
    // btnFailed.id = item.id;
    // btnFailed.classList.add("btnFailed");
    // btnFailed.textContent = "Ended";
    // li.textContent = item.tarea;
    // li.appendChild(btnEnded);
    // li.appendChild(btnFailed);
    // ul.appendChild(li);
  });
}

const success = document.querySelector("#tasksOk");
function showTasksEnded(data) {
  data.forEach((item) => {
    success.innerHTML += `
    <article class="card tar-cumplidas">
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
    // const li = document.createElement("LI");
    // const btnEnd = document.createElement("BUTTON");
    // btnEnd.id = item.id;
    // btnEnd.classList.add("btnEnd");
    // btnEnd.textContent = "Delete";
    // li.textContent = item.tarea;
    // li.appendChild(btnEnd);
    // ol.appendChild(li);
  });
}

const fail = document.querySelector("#tasksFaild");
function showTaskFailded(data) {
  data.forEach((item) => {
    fail.innerHTML += `
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
  // const confirmacion = confirm("Seguro?");
  // if (confirmacion) {
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
  // }
}

async function getOne(id) {
  return await getOneData(id);
}
