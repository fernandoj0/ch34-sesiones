console.log("tarea 2 aquí");

const urlFakeStore = "https://reqres.in/api/users?delay=3";

const almacenarEnLocalStorage = (url) => {
    fetch (url)
    .then((response) =>{
        return response.json();
    })
    .then((objetoJson) => {
        const arreglo = objetoJson.data;
        localStorage.setItem("userData", JSON.stringify(arreglo));
        console.log("si llego a almacenar datos");
      })
    .catch( error => {
        console.log(error);
    });
}

almacenarEnLocalStorage(urlFakeStore)
