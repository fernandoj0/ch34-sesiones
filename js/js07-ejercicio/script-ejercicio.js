console.log("a ver");


// variable que almacena la url de la api 
const url = "https://reqres.in/api/users?delay=5000";

const startButton = document.getElementById("btn");

// https://www.w3schools.com/jsref/met_element_addeventlistener.asp
//startButton.addEventListener("click", (event) => {
startButton.onclick = async (event) => {
  // Evita el comportamiento predeterminado asociado a un evento.
  event.preventDefault();

  const content = document.getElementById("products-container")

  let localStorageUsarData = localStorage.getItem("userData");


  const fechaNuevaSolicitud = new Date().getTime();

  // checar si el local storage no esta vacio
  if (localStorageUsarData !== null) {
    const fechaSolicitudPrevia = await obtenerFechaDelLocalStorage();
    if (fechaSolicitudPrevia - fechaNuevaSolicitud > 6000) {
      content.innerHTML = createSpinner();
      let localStorageUsarData = localStorage.getItem("userData");
      const users = JSON.parse(localStorageUsarData);
      const infoParaMostrar = await mostrarEnDom(users);
      await borrarDatosDelLocalStorage();
      content.innerHTML = infoParaMostrar;

    } else {
      let localStorageUsarData = localStorage.getItem("userData");
      const users = JSON.parse(localStorageUsarData);
      const infoParaMostrar = await mostrarEnDom(users);
      content.innerHTML = infoParaMostrar;
    }
  } else {
    content.innerHTML = createSpinner();
    const infoParaAlmacenar = await almacenarDatosEnLocalStorage(url)
    let localStorageUsarData = localStorage.getItem("userData");
    const users = JSON.parse(localStorageUsarData);
    const infoParaMostrar = await mostrarEnDom(users);
    content.innerHTML = infoParaMostrar;
  }

};

const almacenarDatosEnLocalStorage = async url => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      const arreglo = users.data;
      console.log(arreglo);

      const infoJsonLocalStorage = localStorage.setItem("userData", JSON.stringify(arreglo));
      const fechaSolicitudOriginal = localStorage.setItem("fechaSolicitud", JSON.stringify(new Date().getTime()));
      console.log("si llego a almacenar datos y la fecha");
    })
    .catch((error) => {
      console.log(error);
    })

}

// funcion para mostrar los datos de un hecho string
function mostrarEnDom(datos) {

  const arregloObjeto = datos;
  console.log(arregloObjeto);
  // con el metodo map nos da un nuevo arreglo,
  // forEach modifica el arreglo original
  // https://getbootstrap.com/docs/5.3/content/tables/
  const personas = arregloObjeto.map((element, index, array) => `
  <table class="table"> 
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Avatar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">${element.id}</th>
        <td>${element.email}</td>
        <td>${element.first_name}</td>
        <td>${element.last_name}</td>
      <td><img src="${element.avatar}" alt="avatar"/></td>
    </tr>
  </tbody>
  </table>
  `);

  console.log(personas);
  return personas;

}


async function obtenerFechaDelLocalStorage() {
  const fechaSolicitud = localStorage.getItem("fechaSolicitud");
  const fecha = JSON.parse(fechaSolicitud);
  return fecha;
}

async function borrarDatosDelLocalStorage() {
  localStorage.removeItem("userData");
  localStorage.removeItem("fechaSolicitud");
}

const createSpinner = () => {
  const spinner = `
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>`

  return spinner;
}

const disableStartButton = (valor) => {
  startButton.disabled = valor;
}

