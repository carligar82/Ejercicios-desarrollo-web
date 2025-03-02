const element = document.getElementById("caja");
element.remove();
let actual = ""
let buscaind = 0
let comienzo = 0
let ultima = 0
const pagina ="https://dragonball-api.com/api/characters?limit=58"
leer (pagina,0,0)
function botonPrimera(){
  comienzo = 0
  buscarAPI()
}
function botonAnterior(){
  comienzo = comienzo - 20
  buscarAPI ()
}
function botonSiguiente(){
  comienzo = comienzo + 20
  buscarAPI()
}
function botonUltima(){
  ultima = 1
  buscarAPI()
}
function buscarAPI(){
  actual = pagina
  buscaind = 0
  if (document.getElementById ("genero").value!="All"){
    actual = actual + "&gender=" + document.getElementById ("genero").value
    buscaind = buscaind + 1
  }
  if (document.getElementById ("raza").value){
    actual = actual + "&race=" + document.getElementById ("raza").value
    buscaind = buscaind + 1
  }
  leer (actual,comienzo,buscaind)
}
function leer (a,comienzo,buscaind){
  document.getElementById("lista").innerHTML = ""
  let x = 0
fetch(a)
      .then((response) => response.json())
      .then((data) => {
        const name = []
        const description = []
        const image = []
        const name2 = []
        const description2 = []
        const image2 = []
        document.getElementById("btnPrimera").disabled = false
        document.getElementById("btnUltima").disabled = false
        document.getElementById("btnSiguiente").disabled = false
        document.getElementById("btnAnterior").disabled = false
        if (buscaind==0){
         for (let i=0;i<data.items.length;i++){
          name[i] = data.items[i].name
          description[i] = data.items[i].description
          image[i] = data.items[i].image
         }
        }
        else{
          for (let i=0;i<data.length;i++){
            name[i] = data[i].name
            description[i] = data[i].description
            image[i] = data[i].image
          }
        }
        if (ultima == 1){
          ultima = name.length%20
          comienzo = name.length-ultima-1
          ultima = 0
        }
        for (let i=0; i<name.length; i++){
          if (!document.getElementById("dragon").value){
            if (name[i].toLowerCase().includes(document.getElementById("dragon").value.toLowerCase())){
              name2[x] = name[i]
              description2[x] = description[i]
              image2[x] = image[i]
              x++
            }
          }else{
            name2[x] = name[i]
            description2[x] = description[i]
            image2[x] = image[i]
            x++ 
          }
        }
        mostrar (name2,description2,image2,comienzo)
       })
       .catch((error) => {
         // Manejo de errores en la solicitud
         console.error("Error en la solicitud:", error);
       });
      }
      function mostrar (name,description,image,comienzo){
        console.log (comienzo)
        i=comienzo
        while (i<comienzo+20&&i<name.length){
          const node = document.createElement("div");
          const node2 = document.createElement("img")
          node2.setAttribute("src", image[i]);      
          node.appendChild (node2);
          const node3 = document.createElement("h4");
          const textnode = document.createTextNode(name[i]);
          node3.appendChild(textnode);
          node.appendChild (node3)
          const node4 = document.createElement("a");
          const textnode2 = document.createTextNode(description[i]);
          node4.appendChild(textnode2);
          node.appendChild (node4)
          document.getElementById("lista").appendChild(node);
          i++;
        }
        i--;
        if (i == name.length-1||name.length==0){
          document.getElementById("btnSiguiente").setAttribute ("disabled","true")
          document.getElementById("btnUltima").setAttribute ("disabled","true")
        }
        if (name.length == 0){
          document.getElementById("btnPrimera").setAttribute ("disabled","true")
        }
        if (comienzo-20 < 0){
          document.getElementById("btnAnterior").setAttribute ("disabled","true")
        }
    
          
        
      }
      
      
        


      
  
      
