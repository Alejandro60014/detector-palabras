//DetectorDePalabras
//Detección elementos HTML
let texto = document.getElementById("text");
let boton = document.getElementById("submit");
//Creacion variable frase
let frase = "";
//Evento de input para obtener la frase
texto.addEventListener("input", () => {
  frase = texto.value;
});
//Funcion de normalización de palabras
function normalize(){
  return word.toLowerCase().replace("/.|!|,/", "");
}
//Evento de submit
boton.addEventListener("click", () => {
  let separateWords = frase.split(" ");     
})
