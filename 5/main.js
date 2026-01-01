let botonCrear = document.getElementById("crear");

botonCrear.addEventListener("click", () => {
  let texto = document.getElementById("textoNuevoParrafo");
  let color = document.getElementById("colorElegido");
  let reg = /^[A-Za-z0-9]+$/;
  if (reg.test(texto.value)) {
    let parrafo = document.createElement("p");
    parrafo.style.backgroundColor = color.value;
    parrafo.textContent = texto.value;
    document.body.appendChild(parrafo);
  } else {
    alert("el texto no puede estar vacio");
  }
  console.log(texto.value);
  console.log(color.value);
});
