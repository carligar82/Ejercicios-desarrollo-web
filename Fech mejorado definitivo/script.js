
  const chiste = document.getElementById ('obtenerChiste')
chiste.addEventListener ('click',escribirChiste)
function escribirChiste(){
  document.getElementById("cargando").setAttribute("src", "loading-image.gif");
  let miPromesa = new Promise((resolve) => {
    setTimeout(() => {
      document.getElementsByTagName("img")[0].removeAttribute("src");
      resolve();
    }, 5000);
  });
  miPromesa.then(() => darChiste());
}
function darChiste(){
  
  fetch("https://v2.jokeapi.dev/joke/Programming?lang=es")
  .then((response) => response.json())
  
  .then((data) => {
    // Manipulación de los datos recuperados
    
  
    let chisteescrito =""
    if (data.setup){
      chisteescrito = chisteescrito + data.setup + '\n'
    }
    if (data.delivery){
      chisteescrito = chisteescrito + data.delivery + '\n'
    }
    if (data.joke){
      chisteescrito = chisteescrito + data.joke + '\n'
    }
   
    
  
    const node = document.createElement("li");
    const textnode = document.createTextNode(chisteescrito);
    node.appendChild(textnode);
    document.getElementById("chistes").appendChild(node);
    chisteescrito = ""
  })
  .catch((error) => {
    // Manejo de errores en la solicitud
    console.error("Error en la solicitud:", error)
  });

    
  
    
    
  
}
