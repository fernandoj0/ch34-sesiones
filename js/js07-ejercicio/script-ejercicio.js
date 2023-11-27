console.log("a ver");

// variable que almacena la url de la api 
const url = "https://reqres.in/api/users?delay=5000";

const startButton = document.getElementById("btn");

// https://www.w3schools.com/jsref/met_element_addeventlistener.asp
startButton.addEventListener("click", (event) => {
  // Evita el comportamiento predeterminado asociadoa un evento.
  event.preventDefault();
  console.log(event)
  console.log("hola")
  const localStorageUsarData = localStorage.getItem("userData");

  // enviarDatosAlUsuario(url);
  //almacenarDatosEnLocalStorage(url);  



  console.log(document.readyState);
  almacenarDatosEnLocalStorage(url);
  mostrarDatosDelLocalStorage();

  (function documentonreadystatechange() {
    while (document.getElementById("products-container") == "...") {
      console.log("esperando");
      document.querySelector(
        "body").style.visibility = "hidden";
      showSpinner(true);

      if (document.readyState == "complete") {
        document.querySelector(
          "body").style.visibility = "visible";
        showSpinner(false);
        break;
      }
    }
  })();
});

const enviarDatosAlUsuario = url => { // enviarDatosAlUsuario tiene como parametro solo url
  fetch(url) // apenas empezando la función y ya hace algo con url. En este caso usa fetch. fetch es una promesa
    .then((response) => {
      return response.json();
    })
    .then((people) => {
      visualizarEnDOM(people);
    })
    .catch((error) => {
      console.log(error);
    })
}

function visualizarEnDOM(datos) {
  const productsContainer = document.getElementById("products-container");

  // con el metodo map nos da un nuevo arreglo,
  // forEach modifica el arreglo original
  const arreglo = datos.data;
  console.log(arreglo);
  // https://getbootstrap.com/docs/5.3/content/tables/
  const personas = arreglo.map((element, index, array) => `
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

const almacenarDatosEnLocalStorage = url => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      const arreglo = users.data;
      console.log(arreglo);
      const personas = localStorage.setItem("userData", JSON.stringify(arreglo));
      console.log("si llego a almacenar datos");
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

function mostrarDatosDelLocalStorage() {
  // obtenemos el json guardado en el local storage
  const localStorageUsarData = localStorage.getItem("userData");

  if (localStorageUsarData !== null) {
    const users = JSON.parse(localStorageUsarData); // JSON.parse : Analiza un texto en formato JSON y lo transforma en un objeto
    mostrarEnDom(users);

  }
}

const showSpinner = (valor) => {
  if (valor === true) {
    const spinner = `
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>`

    const zonaEspera = document.getElementById("zona-de-espera");
    zonaEspera.innerHTML = spinner;
  }
  else {
    const zonaEspera = document.getElementById("zona-de-espera");
    zonaEspera.style.visibility = "none";
  }
}

const disableStartButton = (valor) => {
  startButton.disabled = valor;
}

