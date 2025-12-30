const confirmar = document.getElementById("confirmar");
const tipoInput = document.getElementsByTagName("th"); // no tiene forEach
const formularioCreacion = document.getElementById("formularioCreacion");
[...tipoInput].forEach((input) => {
  // convertir una coleccion en un array cuando
  input.addEventListener("click", () => {
    let tipo = input.id;
    switch (tipo) {
      case "text": {
        crearElemento(tipo);
        break;
      }
      case "radio": {
        crearElemento(tipo);
        break;
      }
      case "checkbox": {
        crearElemento(tipo);
        break;
      }
      case "password": {
        crearElemento(tipo);
        break;
      }
      case "textarea": {
        crearElemento(tipo);
        break;
      }
      case "label": {
        crearElemento(tipo);
        break;
      }
      case "number": {
        crearElemento(tipo);
        break;
      }
      case "label": {
        crearElemento(tipo);
        break;
      }
      case "img": {
        crearElemento(tipo);
        break;
      }
      case "button": {
        crearElemento(tipo);
        break;
      }
      default: {
        alert("No esta disponible");
      }
    }
  });
});

function crearElemento(tipo) {
  switch (tipo) {
    case "number": {
    }
    case "text": {
    }
    case "radio": {
    }
    case "checbox": {
    }
    case "password": {
    }
    case "button": {
      let newInput = document.createElement("input");
      newInput.type = tipo;
      formularioCreacion.appendChild(newInput);
      break;
    }
    default: {
      if (confirm("Estás creando un nuevo elemento, estás seguro?")) {
        let newInput = document.createElement(tipo);
        formularioCreacion.appendChild(newInput);
      }
    }
  }
}
