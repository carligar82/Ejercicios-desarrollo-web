const pokemons = [
  {
    name: "Pikachu",
    type: "electric",
  },
  {
    name: "Bulbasur",
    type: "grass",
  },
  {
    name: "Eevee",
    type: "normal",
  },
  {
    name: "Mew",
    type: "psy",
  },
  {
    name: "Squirtle",
    type: "water",
  },
  {
    name: "Charmander",
    type: "fire",
  },
  {
    name: "Charizard",
    type: "fire",
  },
];
function anyadirPokemon (name,type){
  const node = document.createElement("li");
  const node2 = document.createElement("div");
  const node3 = document.createElement("n");
  const node4 = document.createElement("t");
  const textnode = document.createTextNode("Pokemon : "+name);
  node3.appendChild(textnode);
  node2.appendChild(node3);
  const textnode2 = document.createTextNode("Tipo : "+type);
  node4.appendChild(textnode2);
  node2.appendChild(node4);
  node.appendChild(node2);
  document.getElementById("lista").appendChild(node);
}
document.getElementById("lista").innerHTML = ""
let text = document.getElementById("pokemon").value;
if (!text){
  for (let i=0 ; i<=6; i++){
    const {name, type} = pokemons[i]
    anyadirPokemon (name,type)
  }
}
function listaPokemon(){
  document.getElementById("lista").innerHTML = ""
  let text = document.getElementById("pokemon").value;
  for (let i=0;i<=6;i++){
    const {name, type} = pokemons[i]
    if (name.toLowerCase().includes(text.toLowerCase())){
      console.log ("OK")
      console.log (name)
      anyadirPokemon (name,type)
    }
  }
}
