import * as Edificios from "./Edificio.js";
let from = document.getElementById("formulario");
from.addEventListener("submit", (e) => {
  e.preventDefault();
});
let enviar = document.getElementById("enviar");

let arrayEdificios = [];

enviar.addEventListener("click", () => {
  let isOk = true;

  let nombre = document.getElementById("nombre");
  let plantas = document.getElementById("plantas");
  let puertas = document.getElementById("puertas");

  let regNombre = /^[a-zA-z0-9]+$/;
  let regNum = /^[0-9]$/;

  if (!regNombre.test(nombre.value)) {
    isOk = false;
    nombre.classList.add("error");
  } else if (!regNum.test(plantas.value)) {
    isOk = false;
    plantas.classList.add("error");
  } else if (!regNum.test(puertas.value)) {
    isOk = false;
    puertas.classList.add("error");
  } else {
    nombre.classList.remove("error");
    plantas.classList.remove("error");
    puertas.classList.remove("error");
  }

  if (isOk) {
    arrayEdificios.push(new Edificios.Edificio(nombre.value));
    arrayEdificios[arrayEdificios.length - 1].construirPlantas(
      plantas.value,
      puertas.value
    );
    console.log(arrayEdificios);
  }
});
