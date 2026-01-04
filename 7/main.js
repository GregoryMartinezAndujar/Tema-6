import * as Edificios from "./Edificio.js";
import * as Propietarios from "./Propietario.js";
let from = document.getElementById("formulario");
from.addEventListener("submit", (e) => {
  e.preventDefault();
});
let enviar = document.getElementById("enviar");
let modificar = document.getElementById("modificar");
let mostrar = document.getElementById("mostrar");
let titulo = document.createElement("h1");
document.body.appendChild(titulo);
let arrayEdificios = [];
arrayEdificios.push(new Edificios.Edificio("Marco", "Palabrea"));
arrayEdificios[0].construirPlantas(3, 3);
crearOpciones();
crearRadios();
arrayEdificios.push(new Edificios.Edificio("Gregory", "Palavea"));
arrayEdificios[1].construirPlantas(2, 3);
crearOpciones();
crearRadios();

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

mostrar.addEventListener("click", () => {
  let tabla = document.createElement("table");
  tabla.style.borderCollapse = "collapse";

  let edificio = document.getElementById("listadoEdificios");
  titulo.textContent = edificio.value;

  for (let i = 0; i < arrayEdificios.length; i++) {
    if (arrayEdificios[i].direccion == edificio.value) {
      for (let z = 0; z < arrayEdificios[i].plantas.length; z++) {
        let columnas = document.createElement("tr");
        let planta = document.createElement("td");
        planta.textContent = `Planta${z + 1}`;
        columnas.appendChild(planta);
        for (let p = 0; p < arrayEdificios[i].plantas[z].length; p++) {
          let filas = document.createElement("td");
          filas.id = `${z}-${p}-${i}`;
          let nombre = arrayEdificios[i].plantas[z][p].nombre;
          filas.textContent = nombre || "-"; // para que se vea algo

          filas.addEventListener("click", (e) => {
            let valor = e.target.id;
            valor = valor.split("-");
            console.log(valor);
            let planta = valor[0];
            let puerta = valor[1];
            let edificio = valor[2];
            console.log(arrayEdificios[edificio].plantas[planta][puerta]);
            let input = document.createElement("input");
            document.body.appendChild(input);
            input.addEventListener("input", (e) => {
              let puertaComprobacion =
                arrayEdificios[edificio].plantas[planta][puerta];
              if (puertaComprobacion) {
                arrayEdificios[edificio].plantas[planta][puerta].nombre =
                  e.target.value;
              }
            });
          });

          columnas.appendChild(filas);
        }

        tabla.appendChild(columnas);
      }

      let tabla2 = document.getElementsByTagName("table");
      if (tabla2.length >= 1) {
        document.body.replaceChild(tabla, tabla2[0]);
      } else {
        document.body.appendChild(tabla);
      }
    }
  }
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
  opcion.value = arrayEdificios[arrayEdificios.length - 1].direccion;
  opcion.textContent = arrayEdificios[arrayEdificios.length - 1].direccion;
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
