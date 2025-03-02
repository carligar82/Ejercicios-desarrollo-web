const element = document.getElementById("caja");
element.remove();
fetch("https://dragonball-api.com/api/characters?limit=1000")
      .then((response) => response.json())
      .then((data) => {
        for (let i=0;i<=49;i++){
         const {name,description,image} = data.items[i]
         const node = document.createElement("div");
         const node2 = document.createElement("img")
         node2.setAttribute("src", image);      
         node.appendChild (node2);
         const node3 = document.createElement("h4");
         const textnode = document.createTextNode(name);
         node3.appendChild(textnode);
         node.appendChild (node3)
         const node4 = document.createElement("a");
         const textnode2 = document.createTextNode(description);
         node4.appendChild(textnode2);
         node.appendChild (node4)
         document.getElementById("lista").appendChild(node);
        }
      })
      .catch((error) => {
        // Manejo de errores en la solicitud
        console.error("Error en la solicitud:", error);
      });
function generarPersonajes(){
  document.getElementById("lista").innerHTML = ""
  let text = document.getElementById("dragon").value;
  fetch("https://dragonball-api.com/api/characters?limit=1000")
      .then((response) => response.json())
      .then((data) => {
        for (let i=0;i<=49;i++){
         const {name,description,image} = data.items[i]
         if (name.toLowerCase().includes(text.toLowerCase())){
          const node = document.createElement("div");
          const node2 = document.createElement("img")
          node2.setAttribute("src", image);      
          node.appendChild (node2);
          const node3 = document.createElement("h4");
          const textnode = document.createTextNode(name);
          node3.appendChild(textnode);
          node.appendChild (node3)
          const node4 = document.createElement("a");
          const textnode2 = document.createTextNode(description);
          node4.appendChild(textnode2);
          node.appendChild (node4)
          document.getElementById("lista").appendChild(node);
         }
        }
      })
      .catch((error) => {
        // Manejo de errores en la solicitud
        console.error("Error en la solicitud:", error);
      });
}
      
