const valores = document.getElementsByTagName("input[type='text']");
let input = valores[valores.length - 1];

if (input.parentElement.tagName === "FORM") {
  input.classList.add("focus");
} else {
  let contNegativo = 1;
  while (input.parentElement.tagName !== "FORM") {
    console.log(input.parentElement.tagName);
    input = valores[valores.length - contNegativo];
    contNegativo++;
  }
  if (input) {
    input.classList.add("focus");
  }
}
