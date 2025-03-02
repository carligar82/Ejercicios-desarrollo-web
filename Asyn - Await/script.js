async function leer(pagina) {
  return fetch(pagina)
    .then((response) => response.json())
    .then((data) => {
      const {city:ciudad} = data.address
      const usuario = [data.name,data.email,ciudad]
      console.log (data)
      return usuario
    })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
    });
}
async function lecturaDatos() {
  const lectura1 = await leer('https://jsonplaceholder.typicode.com/users/1');
  console.log('Datos usuario 1 :\n  Nombre : ', lectura1[0],'\n  email : ',lectura1[1],'\n  Ciudad : ',lectura1[2]);
  const lectura2 = await leer('https://jsonplaceholder.typicode.com/users/2');
  console.log('Datos usuario 2 :\n  Nombre : ', lectura2[0],'\n  email : ',lectura2[1],'\n  Ciudad : ',lectura2[2]);
  const lectura3 = await leer('https://jsonplaceholder.typicode.com/users/3');
  console.log('Datos usuario 3 :\n  Nombre : ', lectura3[0],'\n  email : ',lectura3[1],'\n  Ciudad : ',lectura3[2]);
  
}
lecturaDatos();
