import * as Edificios from "./Edificio.js";
import * as Propietarios from "./Propietario.js";
let from = document.getElementById("formulario");
from.addEventListener("submit", (e) => {
  e.preventDefault();
});
let enviar = document.getElementById("enviar");
let modificar = document.getElementById("modificar");
let arrayEdificios = [];

enviar.addEventListener("click", () => {
  let isOk = true;

  let nombre = document.getElementById("nombre");
  let plantas = document.getElementById("plantas");
  let puertas = document.getElementById("puertas");
  let direccion = document.getElementById("direccion");

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
  } else if (!regNombre.test(direccion.value)) {
    isOk = false;
    direccion.classList.add("error");
  } else {
    nombre.classList.remove("error");
    plantas.classList.remove("error");
    puertas.classList.remove("error");
    direccion.classList.remove("error");
  }

  if (isOk) {
    arrayEdificios.push(new Edificios.Edificio(nombre.value, direccion.value));
    arrayEdificios[arrayEdificios.length - 1].construirPlantas(
      plantas.value,
      puertas.value
    );
    nombre.value = "";
    plantas.value = "";
    puertas.value = "";
    console.log(arrayEdificios);
    crearRadios();
    crearOpciones();
  }
});

modificar.addEventListener("click", () => {
  modificarPropietario();
});

function crearRadios() {
  let listaRadios = document.getElementById("listadoEdificiosRadios");

  let radio = document.createElement("input");
  let texto = document.createElement("label");

  radio.type = "radio";
  radio.id = arrayEdificios[arrayEdificios.length - 1].direccion;
  radio.value = arrayEdificios[arrayEdificios.length - 1].direccion;
  texto.textContent = arrayEdificios[arrayEdificios.length - 1].direccion;
  radio.name = "edificios";

  texto.setAttribute(
    "for",
    arrayEdificios[arrayEdificios.length - 1].direccion
  );

  texto.appendChild(radio);
  listaRadios.appendChild(texto);
}

function crearOpciones() {
  let lista = document.getElementById("listadoEdificios");
  let opcion = document.createElement("option");
  opcion.textContent = arrayEdificios[arrayEdificios.length - 1].nombre;
  lista.appendChild(opcion);
}

function modificarPropietario() {
  let form = document.getElementById("listadoEdificiosRadios");
  let radios = form.getElementsByTagName("input");

  let puertaModificar = document.getElementById("plantasModificar");
  let plantaModificar = document.getElementById("puertasModificar");
  let propietario = document.getElementById("propietario");

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log(arrayEdificios[i]);
      if (
        arrayEdificios[i].plantas[puertaModificar.value][
          plantaModificar.value
        ] === ""
      ) {
        arrayEdificios[i].plantas[puertaModificar.value][
          plantaModificar.value
        ].push(new Propietarios.Propietario(propietario.value));
      } else {
        arrayEdificios[i].plantas[puertaModificar.value][
          plantaModificar.value
        ].nombre = propietario.value;
      }
    }
  }

  let div = document.createElement("div");
  div.id = "mostrarEdificio";
  document.body.appendChild(div);
  div.innerHTML = `
  <table>
  
  </table>`;
}
