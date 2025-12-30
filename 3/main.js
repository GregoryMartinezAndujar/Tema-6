import * as formulario from "./Js/form.js";
import * as comprobaciones from "./Js/validaciones.js";
import * as Discos from "./Clases/Disco.js";
const arrayDiscos = [];

const contenedor = document.createElement("div");
contenedor.id = "tablaRespuestas";

formulario.crearForm();
document.body.appendChild(contenedor);
const nombre = document.getElementById("nombre");
const artista = document.getElementById("artista");
const año = document.getElementById("año");
const tipo = document.getElementById("tipo");
const localizacion = document.getElementById("localizacion");
const prestado = document.getElementsByName("prestado");
const confirmar = document.getElementById("confirmar");
crearTabla();
confirmar.addEventListener("click", () => {
  validar();
});

function validar() {
  let validacio = "";
  validacio += comprobaciones.validarNombre(nombre);
  validacio += comprobaciones.validarNombre(artista);
  validacio += comprobaciones.validarNombre(tipo);
  validacio += comprobaciones.validarLocalización(localizacion);
  validacio += comprobaciones.validarAño(año);
  console.log(validacio);
  let valorRadio = "";
  for (let i = 0; i < prestado.length; i++) {
    if (prestado[i].checked) {
      valorRadio = prestado[i].value;
    }
  }
  if (validacio === "") {
    if (arrayDiscos.includes(nombre.value)) {
      arrayDiscos.push(
        new Discos.Disco(
          nombre.value,
          artista.value,
          año.value,
          tipo.value,
          localizacion.value,
          valorRadio
        )
      );
      crearTabla();
    }
  }
}

function crearTabla() {
  let crear = "";
  let arrayOrdenado = arrayDiscos.toSorted((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );
  arrayOrdenado.forEach((discoSuelto) => {
    if (discoSuelto.nombre === arrayDiscos[arrayDiscos.length - 1].nombre) {
      crear += `
    <tr>
       <td class="ultimo">${discoSuelto.nombre}</td>
       <td class="ultimo">${discoSuelto.autor}</td>
       <td class="ultimo">${discoSuelto.año}</td>
       <td class="ultimo">${discoSuelto.tipo}</td>
       <td class="ultimo">${discoSuelto.localizacion}</td>
       <td class="ultimo">${discoSuelto.prestado}</td>
    </tr>`;
    } else {
      crear += `
    <tr>
    <td>${discoSuelto.nombre}</td>
    <td>${discoSuelto.autor}</td>
    <td>${discoSuelto.año}</td>
    <td>${discoSuelto.tipo}</td>
    <td>${discoSuelto.localizacion}</td>
    <td>${discoSuelto.prestado}</td>
    </tr>`;
    }
  });
  document.getElementById("tablaRespuestas").innerHTML = `
  <table border="1px">
    <tr>
    <th>Nombre</th>
    <th>Grupo o contante</th>
    <th>Año</th>
    <th>Tipo de música</th>
    <th>Localización</th>
    <th>Prestado</th>
    </tr>
    ${crear}
  </table>`;
}
document.body.appendChild(contenedor);
