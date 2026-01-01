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
