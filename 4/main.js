const confirmar = document.getElementById("confirmar");
const tipoInput = document.getElementsByTagName("th"); // no tiene forEach
const formularioCreacion = document.getElementById("formularioCreacion");
let nombre = "";
let valor = "";
[...tipoInput].forEach((input) => {
  // convertir una coleccion en un array cuando
  input.addEventListener("click", () => {
    let tipo = input.id;
    switch (tipo) {
      case "text": {
        nombre = prompt("¿Que nombre tiene este input?"); // si no se pone nada en promt es null, no vacio
        if (nombre !== null) {
          crearElemento(tipo, nombre);
        } else {
          alert("No puedes dejar el campo vacio");
        }
        break;
      }
      case "radio": {
        nombre = prompt("¿Que nombre tiene este input?");
        valor = prompt("¿Que valor tiene este input?");
        crearElemento(tipo, nombre, valor);
        break;
      }
      case "checkbox": {
        nombre = prompt("¿Que nombre tiene este input?");
        valor = prompt("¿Que valor tiene este input?");
        crearElemento(tipo, nombre, valor);
        break;
      }
      case "password": {
        nombre = prompt("¿Que nombre tiene este input?");
        if (nombre !== null) {
          crearElemento(tipo, nombre);
        } else {
          alert("No puedes dejar el campo vacio");
        }
        break;
      }
      case "textarea": {
        nombre = prompt("¿Que nombre tiene este input?");
        crearElemento(tipo, nombre);
        break;
      }
      case "label": {
        nombre = prompt("¿Que nombre tiene este label?");
        crearElemento(tipo, nombre);
        break;
      }
      case "number": {
        nombre = prompt("¿Que nombre tiene este input?");
        crearElemento(tipo, nombre);
        break;
      }
      case "img": {
        nombre = prompt("¿Que nombre tiene está imagén?");
        valor = prompt("¿Cuál es la ruta de la imagén?");
        crearElemento(tipo, nombre, valor);
        break;
      }
      case "submit": {
        nombre = prompt("¿Que nombre tiene este input?");
        valor = prompt("¿Que valor tiene este input?");
        crearElemento(tipo, nombre, valor);
        break;
      }
      default: {
        alert("No esta disponible");
      }
    }
  });
});

function crearElemento(tipo, nombre, valor) {
  switch (tipo) {
    case "radio": {
    }
    case "number": {
    }
    case "text": {
    }

    case "checbox": {
    }
    case "password": {
    }
    case "submit": {
      let newInput = document.createElement("input");
      newInput.type = tipo;
      if (tipo === "radio" || tipo === "submit") {
        newInput.value = valor;
        newInput.id = valor;
      } else {
        newInput.id = nombre;
      }
      newInput.name = nombre;
      formularioCreacion.appendChild(newInput);
      break;
    }
    case "label": {
      let oldInput = document.getElementsByName(nombre);
      let newInput = document.createElement(tipo);
      newInput.textContent = nombre;
      newInput.setAttribute("for", nombre);

      if (oldInput[0].type == "radio") {
        for (let i = 0; i < oldInput.length; i++) {
          formularioCreacion.appendChild(newInput);
          newInput.appendChild(oldInput[i]);
          console.log(oldInput[i]);
        }
      } else {
        formularioCreacion.appendChild(newInput);
        formularioCreacion.appendChild(oldInput[0]);
      }

      break;
    }

    default: {
      if (confirm("Estás creando un nuevo elemento, estás seguro?")) {
        let newInput = document.createElement(tipo);
        if (tipo === "textarea") {
          newInput.cols = 40;
          newInput.rows = 5;
        } else if (tipo === "img") {
          newInput.src = valor;
        }
        formularioCreacion.appendChild(newInput);
      }
    }
  }
}
