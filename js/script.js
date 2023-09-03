// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  //Esto significa que una vez que la página está completamente cargada en el navegador esta función ocurre.
  const filtrarArray = strangeArray.filter((element) => typeof element === "string");
  /* Filter crea un nuevo arreglo con los elementos que cumplen la condición de 
  ser un string.*/
  filtrarArray.sort();
  //Ordena los elementos en orden alfabético.
  showList(filtrarArray);
  /* La función showList toma un arreglo y lo muestra en la lista con el id
  "list" en HTML*/

});
