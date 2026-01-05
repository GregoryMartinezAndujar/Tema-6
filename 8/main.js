let agregar = document.getElementById("agregar");
let galeria = document.getElementById("galeria");

agregar.addEventListener("click", () => {
  let img = document.getElementById("imagen");
  if (img.files.length) {
    let div = document.createElement("div");

    let imagenCrear = document.createElement("img");
    imagenCrear.src = URL.createObjectURL(img.files[0]);
    imagenCrear.style.width = "30%";
    let boton = document.createElement("button");
    boton.textContent = "X";

    boton.addEventListener("click", (e) => {
      let borrar = boton.parentElement;
      galeria.removeChild(borrar);
    });

    div.appendChild(boton);
    div.appendChild(imagenCrear);
    // div.classList.add("galeria");

    galeria.appendChild(div);
  } else {
    alert("selecciona una imagen antes de intentar agregar");
  }
});
