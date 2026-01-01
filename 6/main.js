let parrafos = document.getElementsByTagName("p");
let numeroParrafos = parrafos.length;
let textoSegundoParrafo = parrafos[1].textContent;

console.log(`número de párrafos ${numeroParrafos}`);
console.log(`Texto del segundo párrafo ${textoSegundoParrafo}`);

let enlaces = document.getElementsByTagName("a");
let numeroEnlaces = enlaces.length;
let textoSegundoEnlaces = enlaces[1].href;
let textoPenultimoEnlaces = enlaces[enlaces.length - 1].href;

console.log(`número de enlaces ${numeroEnlaces}`);
console.log(`Texto del segundo enlace ${textoSegundoEnlaces}`);

let numeroEnlacesWiki = 0;

for (let i = 0; i < numeroEnlaces; i++) {
  let texto = enlaces[i].href;
  if (texto.includes("/wiki/Municipio")) {
    numeroEnlacesWiki++;
  }
}
console.log(`Enlaces a wiki ${numeroEnlacesWiki}`);

let enlacesEnPrimerParrafo = parrafos[0].getElementsByTagName("a").length;
console.log(`Enlaces en el primer párrafo ${enlacesEnPrimerParrafo}`);

for (let i = 0; i < numeroParrafos; i++) {
  console.log(parrafos[i].textContent);
}

let archivo = document.getElementById("pagina");
let iframe = document.getElementById("paginaUsuario");

archivo.addEventListener("change", () => {
  //files es donde están los archivos subidos por el usuario
  //name es para construir la ruta al archivo
  iframe.src = archivo.files[0].name;

  //para que pueda acceder al dom del iframe tengo que esperar que se carge, si no dara error
  iframe.addEventListener("load", () => {
    //permite acceder al dom de la página dentro del iframe
    let domDelaPaginaUsuario = iframe.contentDocument;

    let parrafosIframe = domDelaPaginaUsuario.getElementsByTagName("p");
    let numeroParrafosIframe = parrafosIframe.length;
    let textoSegundoParrafoIframe = parrafosIframe[1].textContent;

    console.log(`número de párrafos iframe ${numeroParrafosIframe}`);
    console.log(
      `Texto del segundo párrafo iframe ${textoSegundoParrafoIframe}`
    );

    let enlacesIframe = domDelaPaginaUsuario.getElementsByTagName("a");
    let numeroEnlacesIframe = enlacesIframe.length;
    let textoSegundoEnlacesIframe = enlacesIframe[1].href;
    let textoPenultimoEnlacesIframe =
      enlacesIframe[enlacesIframe.length - 1].href;

    console.log(`número de enlaces iframe ${numeroEnlacesIframe}`);
    console.log(`Texto del segundo enlace iframe ${textoSegundoEnlacesIframe}`);
    console.log(
      `Texto del Penultimo enlace iframe ${textoPenultimoEnlacesIframe}`
    );

    let numeroEnlacesWikiIframe = 0;

    for (let i = 0; i < numeroEnlacesIframe; i++) {
      let texto = enlacesIframe[i].href;
      if (texto.includes("/wiki/Municipio")) {
        numeroEnlacesWikiIframe++;
      }
    }
    console.log(`Enlaces a wiki iframe${numeroEnlacesWikiIframe}`);

    let enlacesEnPrimerParrafoIframe =
      parrafosIframe[0].getElementsByTagName("a").length;
    console.log(
      `Enlaces en el primer párrafo iframe ${enlacesEnPrimerParrafoIframe}`
    );

    for (let i = 0; i < numeroParrafosIframe; i++) {
      console.log(parrafosIframe[i].textContent);
    }
  });
});

// archivo[0].name;
