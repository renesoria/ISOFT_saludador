import saludar from "./saludador";

const form = document.querySelector("#saludar-form");
const nombre= document.querySelector("#nombre-input");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + saludar(nombre.value) + "</p>";
});