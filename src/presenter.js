import saludar from "./saludador";

const form = document.querySelector("#saludar-form");
const nombre= document.querySelector("#nombre-input");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const idioma = document.querySelector("#idioma");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + saludar(nombre.value,genero.value,Number(edad.value),idioma.value) + "</p>";
});