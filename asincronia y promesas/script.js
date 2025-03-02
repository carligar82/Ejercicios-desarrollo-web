let Promesa1 = new Promise ((resolve,reject) => {
  console.log ("Ejecutando promesa 1 ...")
  setTimeout(() => {
    resolve (Math.floor((Math.random() * 10) + 1));
  }, 5000);
  });
  let Promesa2 = new Promise ((resolve,reject) => {
    console.log ("Ejecutando promesa 2 ...")
    setTimeout(() => {
      resolve (Math.floor((Math.random() * 10) + 1));
    }, 3000);
    });
    let Promesa3 = new Promise ((resolve,reject) => {
      console.log ("Ejecutando promesa 3 ...")
      setTimeout(() => {
        resolve (Math.floor((Math.random() * 10) + 1));
      }, 1000);
      });
      Promesa1.then((value1) => console.log ("Resultado promesa 1 : ",value1))
      Promesa2.then((value2) => console.log ("Resultado promesa 2 : ",value2))
      Promesa3.then((value3) => console.log ("Resultado promesa 3 : ",value3))
      Promise.all([Promesa1, Promesa2, Promesa3]).then((values)=> {
        console.log("Suma = ",values.reduce(getSum, 0));
      });
      function getSum(total, num) {
        return total + num;
      }