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
  return frase.toLowerCase().replace("/.|!|,/", "");
}
var separateWords = " "
function separarPalabras(){
  var separateWord = normalize();
  separateWords = separateWord.split(" ");     
  setTimeout(function(){
    console.log("Hola")
  }, 5000)
}
//Evento de submit
boton.addEventListener("click", separarPalabras())
//Creando hash map
const palabras = new Map();
//Iterando elementos de separateWords y añadiéndolos a palabras
for (let i = 0; i < separateWords.length; i++){
  palabras.set(separateWords[i], 1);
  if (palabras.has(separateWords[i])){ //Sumando el valor de la llave
    var llave = palabras.get(separateWords[i]);
    llave++;
    palabras.set(separateWords[i], llave);
  }
}
//Iterando el hash map para obtener la palabra que más se repite
console.log(palabras.values())
