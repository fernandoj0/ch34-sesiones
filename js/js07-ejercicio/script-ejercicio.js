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
  const localStorageUsarData = localStorage.getItem( "userData" );
 
  // enviarDatosAlUsuario(url);
  //almacenarDatosEnLocalStorage(url);  
  setTimeout( almacenarDatosEnLocalStorage(url), 10000 );
   
  while (localStorageUsarData == null) {
    disableStartButton(true);
    showSpinner();
  } 
  mostrarDatosDelLocalStorage();


});




/* Una funcion es como una maquina de tortillas. En este caso especifico
tu le metes masa y al final sale una tortilla ya hecha y caliente.
Lo mismo son las funciones pero con la diferencia de que aceptan cualquier otra cosa, no solo masas y te devuelve
cualquier otra cosa y no solo tortillas.


enviarDatosAlUsuario antes que nada es una funcion. ¿cómo lo sé? por cómo esta escrito eso.

La forma en que se muestra es una arrow function pero pudo haber sido una funcion declarada o una 
funcion expresada pero en este caso es una funcion flecha o arrow function

sabemos las arrow functions se declaran de esta forma
const/let nombre_de_la_funcion = ( parametros ) => {
  accion que quieres que realice la funcion con los parametros
  
  retorno de algo (puede ser el mismo parametro pero modificado, algun cálculo o cualquier otra cosa)
}

¿que hará enviarDatosAlUsuario? ... pues no lo sabemos hasta que vayamos leyendo poco a poco la función 
Empecemos por leer sus parámetros. Aquello que recibe y con lo que trabajará como la maquina de tortillas.
*/

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
    .then((people) => {
      const arreglo = people.data;
      const personas = arreglo.map((element, index, array) => {
        localStorage.setItem("userData", JSON.stringify(arreglo));
      });
      console.log("si llego a almacenar datos");
    })
    .catch((error) => {
      console.log(error);
    })

}

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
  const localStorageUsarData = localStorage.getItem( "userData" );

  if ( localStorageUsarData !== null ) {
    const users = JSON.parse(localStorageUsarData); // JSON.parse : Analiza un texto en formato JSON y lo transforma en un objeto
    mostrarEnDom(users);
    
  }
}

const showSpinner = () =>{
  const spinner = `
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`
  
  const zonaEspera = document.getElementById("zona-de-espera");
  zonaEspera.innerHTML = spinner;
}


const disableStartButton = (valor) => {
  startButton.disabled = valor;
} 

