function validarNombre(valor) {
  valor.classList.remove("fallo");
  let mensaje = "";
  // let valorCadena = valor.value.replace(/\s+/g, " ").trim();
  let patron = /^[A-Za-z0-9 ]+$/;
  if (!patron.test(valor.value)) {
    valor.classList.add("fallo");
    mensaje = "error al validad el campo";
  } else {
    valor.classList.add("acierto");
  }
  return mensaje;
}

function validarAño(valor) {
  valor.classList.remove("fallo");
  let mensaje = "";
  let patron = /^[0-9]{2,4}$/;
  if (!patron.test(valor.value)) {
    valor.classList.add("fallo");

    mensaje = "error al validad el campo";
  } else {
    valor.classList.add("acierto");
  }
  return mensaje;
}

function validarLocalización(valor) {
  valor.classList.remove("fallo");
  let mensaje = "";
  let patron = /^[0-9]+$/;
  if (!patron.test(valor.value)) {
    valor.classList.add("fallo");
    mensaje = "error al validad el campo";
  } else {
    valor.classList.add("acierto");
  }
  return mensaje;
}

export { validarNombre, validarLocalización, validarAño };
