const formulario = document.createElement("form");

function crearForm() {
  let arrayElemt = [
    ["text", "Nombre Disco", "nombre"],
    ["text", "Grupo de música o cantante", "artista"],
    ["number", "Año de publicación", "año"],
    ["text", "Tipo def música", "tipo"],
    ["number", "Localización", "localizacion"],
    ["radio", "Prestado", "prestado"],
    ["button", "Enviar", "confirmar"],
  ];

  for (let i = 0; i < arrayElemt.length; i++) {
    crearElementos(arrayElemt[i][0], arrayElemt[i][1], arrayElemt[i][2]);
  }
  const titulo = document.createElement("h1");
  titulo.textContent = "Creación de discos";
  document.body.appendChild(titulo);
  document.body.appendChild(formulario);
}

function crearElementos(tipo, texto, id) {
  const cajasDeTexto = document.createElement("input");
  const saltoDeLinea = document.createElement("br");
  const label = document.createElement("label");
  cajasDeTexto.type = tipo;
  cajasDeTexto.id = id;
  if (tipo !== "button") {
    label.textContent = texto;
    label.htmlFor = id;
  }
  formulario.appendChild(label);
  if (tipo === "radio") {
    const cajasDeTexto2 = document.createElement("input");
    cajasDeTexto2.type = tipo;
    cajasDeTexto.name = id;
    cajasDeTexto2.name = id;
    cajasDeTexto.value = "No";
    cajasDeTexto2.value = "Si";
    cajasDeTexto2.checked = true;

    const pa = document.createElement("p");
    pa.textContent = "Si";
    formulario.appendChild(cajasDeTexto2);
    formulario.appendChild(pa);

    const pa2 = document.createElement("p");
    pa2.textContent = "No";
    formulario.appendChild(cajasDeTexto);
    formulario.appendChild(pa2);

    formulario.appendChild(saltoDeLinea);
  } else if (tipo === "button") {
    cajasDeTexto.value = texto;
  }

  if (tipo !== "radio") {
    formulario.appendChild(cajasDeTexto);
    formulario.appendChild(saltoDeLinea);
  }
}

export { crearForm };
