import * as clase from "./Tarea.js";
let confirmar = document.getElementById("confirmar");
let valorLista = document.getElementById("listas");
let contenedorLista = document.getElementById("contenedorListas");

const arrayLista = [
  new clase.Tarea("Comprar pan"),
  new clase.Tarea("Arreglar cañeria"),
  new clase.Tarea("Recoger al niño"),
];
cargarLista();

confirmar.addEventListener("click", () => {
  if (valorLista != "") {
    arrayLista.push(new clase.Tarea(valorLista.value));
    crearElemento(arrayLista[arrayLista.length - 1]);
  }
});

function cargarLista() {
  for (let i = 0; i < arrayLista.length; i++) {
    let valor = arrayLista[i];
    crearElemento(valor);
  }
}

function crearElemento(valor) {
  const crearLista = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  crearLista.textContent = valor.consultar();
  crearLista.appendChild(checkbox);
  contenedorLista.appendChild(crearLista);
  checkbox.addEventListener("change", () => {
    let textoP = checkbox.parentElement;
    valor.isCompletada();
    textoP.textContent = valor.consultar();
    textoP.appendChild(checkbox);
    textoP.classList.toggle("tachado");
    console.log(arrayLista);
  });
}
