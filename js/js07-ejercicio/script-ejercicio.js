console.log("a ver");


// variable que almacena la url de la api 
const url = "https://reqres.in/api/users?delay=5000";

const startButton = document.getElementById("btn");

// https://www.w3schools.com/jsref/met_element_addeventlistener.asp
//startButton.addEventListener("click", (event) => {
startButton.onclick = async (event) => {
  // Evita el comportamiento predeterminado asociado a un evento.
  event.preventDefault();
  console.log(event);
  const localStorageUsarData = localStorage.getItem("userData");
  const users = JSON.parse(localStorageUsarData);
  const fechaNuevaSolicitud = new Date().getTime();

  // checar si el local storage no esta vacio
  if (localStorageUsarData !== null) {
    const fechaSolicitudPrevia = await obtenerFechaDelLocalStorage();
    if (fechaSolicitudPrevia - fechaNuevaSolicitud > 6000) {
      await showSpinner(true)
      await mostrarEnDom(users);
      await borrarDatosDelLocalStorage();
    } else {
      await mostrarUsuariosDelLocalStorage();
    }
  } else {
    await almacenarDatosEnLocalStorage(url);
    await mostrarUsuariosDelLocalStorage();
  }

  sectionDeSpinner.innerHTML = showSpinner(true);

  
};

const almacenarDatosEnLocalStorage = async url => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      const arreglo = users.data;
      console.log(arreglo);
      const personas = localStorage.setItem("userData", JSON.stringify(arreglo));
      const fechaSolicitudOriginal = localStorage.setItem("fechaSolicitud", JSON.stringify(new Date().getTime()));
      console.log("si llego a almacenar datos y la fecha");
    })
    .catch((error) => {
      console.log(error);
    })

}

// funcion para mostrar los datos de un hecho string
function mostrarEnDom(datos) {
  const productsContainer = document.getElementById("products-container");

  // con el metodo map nos da un nuevo arreglo,
  // forEach modifica el arreglo original
  // https://getbootstrap.com/docs/5.3/content/tables/
  const personas = datos.map((element, index, array) => `
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

  productsContainer.innerHTML = personas.join("");

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



const createSpinner = (valor) => {
    const spinner = `
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>`
}

const disableStartButton = (valor) => {
  startButton.disabled = valor;
}

