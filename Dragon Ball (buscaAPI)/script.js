// Hecho sin paginación porque al aplicar los filtros en la API no hay paginación
const element = document.getElementById("caja");
element.remove();
let actual = "";
let buscaind = 0;
let comienzo = 0;
let id = []
const pagina = "https://dragonball-api.com/api/characters?limit=58";
leer(pagina, 0, 0);  // Página inicial mostrando personajes de 20 en 20
// Funciones de acción al presionar los botones
function botonPrimera() {
    comienzo = 0;
    buscarAPI();
}
function botonAnterior() {
    comienzo = comienzo - 20;
    buscarAPI();
}
function botonSiguiente() {
    comienzo = comienzo + 20;
    buscarAPI();
}
function botonUltima() {
    comienzo = ultima;
    buscarAPI();
}
// Función de filtro en la API
function buscarAPI() {
    actual = pagina;
    buscaind = 0;
    if (document.getElementById("genero").value != "All") {
        actual = actual + "&gender=" + document.getElementById("genero").value;
        buscaind = buscaind + 1;
    }
    if (document.getElementById("raza").value != "All") {
        actual = actual + "&race=" + document.getElementById("raza").value;
        buscaind = buscaind + 1;
    }
    if (document.getElementById("affiliation").value != "All") {
        actual = actual + "&affiliation=" + document.getElementById("affiliation").value;
        buscaind = buscaind + 1;
    }
    leer(actual, comienzo, buscaind);
}
// Fech de los personajes (filtrados por nombre si el input no está vacio)
function leer(a, comienzo, buscaind) {
    document.getElementById("lista").innerHTML = "";
    let x = 0;
    let y = 0;
    fetch(a)
        .then((response) => response.json())
        .then((data) => {
            const name = [];
            const description = [];
            const image = [];
            id= [];
            document.getElementById("btnPrimera").disabled = false;
            document.getElementById("btnUltima").disabled = false;
            document.getElementById("btnSiguiente").disabled = false;
            document.getElementById("btnAnterior").disabled = false;
            if (buscaind == 0) {
                for (let i = 0; i < data.items.length; i++) {
                    name[i] = data.items[i].name;
                    description[i] = data.items[i].description;
                    image[i] = data.items[i].image;
                    id[y] = data.items[i].id
                    y++
                }
            } else {
                for (let i = 0; i < data.length; i++) {
                    name[i] = data[i].name;
                    description[i] = data[i].description;
                    image[i] = data[i].image;
                    id[y] = data[i].id
                    y++
                }
            }
            ultima = name.length - (name.length % 20);
            mostrar(name, description, image, comienzo);
        })
        .catch((error) => {
            // Manejo de errores en la solicitud
            console.error("Error en la solicitud:", error);
        });
}
// Fech de todos los planetas
// Función de mostrar personajes (filtrados o no)
function mostrar(name, description, image, comienzo) {
    i = comienzo;
    while (i < comienzo + 20 && i < name.length) {
        const node = document.createElement("div");
        const node2 = document.createElement("img");
        node2.setAttribute("src", image[i]);
        node2.setAttribute("class", id[i]);
        node2.setAttribute("onclick", "clicado(event)");
        node.appendChild(node2);
        const node3 = document.createElement("h4");
        const textnode = document.createTextNode(name[i]);
        node3.appendChild(textnode);
        node.appendChild(node3);
        const node4 = document.createElement("a");
        const textnode2 = document.createTextNode(description[i]);
        node4.appendChild(textnode2);
        node.appendChild(node4);
        document.getElementById("lista").appendChild(node);
        i++;
    }
    i--;
    if (i == name.length - 1 || name.length == 0) {
        document
            .getElementById("btnSiguiente")
            .setAttribute("disabled", "true");
        document.getElementById("btnUltima").setAttribute("disabled", "true");
    }
    if (name.length == 0||name.length<=20) {
        document.getElementById("btnPrimera").setAttribute("disabled", "true");
    }
    if (comienzo - 20 < 0||name.length<=20) {
        document.getElementById("btnAnterior").setAttribute("disabled", "true");
    }
}
// Función que cambia el contrenido de la caja al clickear la foto
function clicado(event) {
    console.log(event.target.getAttribute ('class'));
}

      
