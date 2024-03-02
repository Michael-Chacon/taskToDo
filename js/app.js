import { getData } from "../Api/core.js";
import { postData } from "../Api/core.js";
import { deleteData } from "../Api/core.js";

document.addEventListener("DOMContentLoaded", () => {
  getData();
});

const form = document.querySelector("#formulario");
form.addEventListener("submit", obtenerDatos);

function obtenerDatos(e) {
  e.preventDefault();
  const dataForm = new FormData(form);
  const tal = Object.fromEntries(dataForm);
  postData(tal);
  // console.log(deleteData("b220"));
  // const getjson = JSON.stringify(tal);
  // console.log(getjson);
}
