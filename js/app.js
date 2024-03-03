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

const ul = document.querySelector("#tasks");
ul.addEventListener("click", detectarBoton);

function showTask(data) {
  data.forEach((item) => {
    const li = document.createElement("LI");
    const btnEnded = document.createElement("BUTTON");
    const btnFailed = document.createElement("BUTTON");
    btnEnded.id = item.id;
    btnEnded.classList.add("btnEnded");
    btnEnded.textContent = "Ended";
    btnFailed.id = item.id;
    btnFailed.classList.add("btnFailed");
    btnFailed.textContent = "Ended";
    li.textContent = item.tarea;
    li.appendChild(btnEnded);
    li.appendChild(btnFailed);
    ul.appendChild(li);
  });
}

const ol = document.querySelector("#tasksOk");
function showTasksEnded(data) {
  data.forEach((item) => {
    const li = document.createElement("LI");
    const btnEnd = document.createElement("BUTTON");
    btnEnd.id = item.id;
    btnEnd.classList.add("btnEnd");
    btnEnd.textContent = "Delete";
    li.textContent = item.tarea;
    li.appendChild(btnEnd);
    ol.appendChild(li);
  });
}

const olFail = document.querySelector("#tasksFaild");
function showTaskFailded(data) {
  data.forEach((item) => {
    const li = document.createElement("LI");
    const btnFail = document.createElement("BUTTON");
    btnFail.id = item.id;
    btnFail.classList.add("btnFail");
    btnFail.textContent = "Delete";
    li.textContent = item.tarea;
    li.appendChild(btnFail);
    olFail.appendChild(li);
  });
}

async function detectarBoton(e) {
  const confirmacion = confirm("Seguro?");
  if (confirmacion) {
    if (e.target.classList.contains("btnEnded")) {
      const id = e.target.id;
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
}

async function getOne(id) {
  return await getOneData(id);
}
