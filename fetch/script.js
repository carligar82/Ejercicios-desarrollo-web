
fetch("https://sv443.net/jokeapi/v2/")
  .then((response) => response.json())
  .then((data) => {
    // Manipulación de los datos recuperados
    console.log(data);
  })
  .catch((error) => {
    // Manejo de errores en la solicitud
    console.error("Error en la solicitud:", error);
  });const chiste = document.getElementById ('obtenerChiste')
chiste.addEventListener ('click',escribirChiste)

function escribirChiste(){
  fetch("https://v2.jokeapi.dev/joke/Programming?lang=es")
  .then((response) => response.json())
  .then((data) => {
    // Manipulación de los datos recuperados
   let escribirchiste = ""
   if (data.setup)
   {
    escribirchiste = escribirchiste + data.setup + "\n" 
   }
   if (data.delivery)
   {
    escribirchiste = escribirchiste + data.delivery + "\n" 
   }
   if (data.joke)
   {
    escribirchiste = escribirchiste + data.joke + "\n" 
   }
    document.getElementById("chiste").innerHTML = escribirchiste;
  })
  .catch((error) => {
    // Manejo de errores en la solicitud
    console.error("Error en la solicitud:", error);
  });
}