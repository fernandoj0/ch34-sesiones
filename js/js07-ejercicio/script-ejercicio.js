// variable que almacena la url de la api 
const url = "https://reqres.in/api/users?delay=5000";
// variable que hace referencia al boton de HTML
const startButton = document.getElementById("btn");


startButton.onclick = async () => {
  const content = document.getElementById("products-container")
  const datosLocalStorage = localStorage.getItem("userData");

  const fechaNuevaSolicitud = new Date().getTime();
  console.log(typeof (fechaNuevaSolicitud));

  // al momento de haber pulsado el boton, desactivarlo hasta que se termine de completar el bloque de codigo 
  // de la condicion a la que entre
  desactivarBoton(true);

  // si hay algo de contenido en el local storage
  if (datosLocalStorage !== null) {
    // obtener la fecha en la que se realizo la anterior solicitud
    const fechaSolicitudPrevia = await obtenerFechaDelLocalStorage();
    /* si la diferencia entre el tiempo en que se almacenaron los datos y el tiempo en que se pulso el boton es 
      mayor a un minuto (60000 milisegundos)
      mostrar un spinner, borrar los datos del local storage,
      volver a obtener los datos de la api, guardarlos en el local storage y mostrarlos en el DOM
    */
    if (fechaNuevaSolicitud - fechaSolicitudPrevia > 60000) {
      content.innerHTML = showSpinner();
      await borrarDatosDelLocalStorage();
      await almacenarDatosEnLocalStorage(url);
      const datosUsuariosLocalStorageJson = localStorage.getItem("userData");
      const users = JSON.parse(datosUsuariosLocalStorageJson); // JSON.parse: transforma un string json en un objeto js
      const infoParaMostrar = await mostrarEnDom(users);
      content.innerHTML = infoParaMostrar;
      desactivarBoton(false);
      /*
      de lo contrario solo mostrar los datos del local storage
      */
    } else {
      const datosUsuariosLocalStorageJson = localStorage.getItem("userData");
      const users = JSON.parse(datosUsuariosLocalStorageJson);
      const infoParaMostrar = await mostrarEnDom(users);
      content.innerHTML = infoParaMostrar;
      desactivarBoton(false);
    }
  /* si es la primera vez que se pulsa el boton, almacenar los datos en el local storage, 
  volver a obtener los datos de la api, 
  guardarlos en el local storage y mostrarlos en el DOM
  */
  } else {
    content.innerHTML = showSpinner();
    await almacenarDatosEnLocalStorage(url);
    const datosUsuariosLocalStorageJson = localStorage.getItem("userData");
    const users = JSON.parse(datosUsuariosLocalStorageJson);
    const infoParaMostrar = await mostrarEnDom(users);
    content.innerHTML = infoParaMostrar;
    desactivarBoton(false);
  }

};



/**
 * se crea una promesa para obtener la informacion de la url y se consume la promesa,
 * se toma la respuesta de dicha promesa y se lee hasta el final (response.json()) creando así una nueva promesa,
 * la segunda promesa es consumida y se obtiene un objeto JS. De dicho objeto se toma solo el valor del atributo data y se almacena dicha infromación en formato JSON en el localStorage 
 *también se guarda la fecha de creación de dicho objeto en el localStorage
 * 
 * @param {String} url 
 * 
 */
const almacenarDatosEnLocalStorage = async url => {
  await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      const arreglo = users.data;

      const infoJsonLocalStorage = localStorage.setItem("userData", JSON.stringify(arreglo));
      const fechaSolicitudOriginal = localStorage.setItem("fechaSolicitud", JSON.stringify(new Date().getTime()));

    })
    .catch((error) => {
      console.log(error);
    })

}

/**
 * Itera sobre un arreglo de objetos, muestra 
 * los valores de los atributos:
 * id, email, first_name, last_name y avatar
 * en una tabla de bootstrap 
 * y retorna la tabla con dichos datos
 * @param {Object[]} arreglo 
 * @returns {String}
 */
 const mostrarEnDom = async (arreglo) => {
  // con el metodo map nos da un nuevo arreglo,
  // forEach modifica el arreglo original
  // https://getbootstrap.com/docs/5.3/content/tables/
  const personas = arreglo.map((element, index, array) => `
  <table class="table table-dark"> 
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
        <td class="text-white">${element.email}</td>
        <td class="text-white">${element.first_name}</td>
        <td class="text-white">${element.last_name}</td>
      <td class="text-white"><img src="${element.avatar}" class="rounded-circle" alt="avatar"/></td>
    </tr>
  </tbody>
  </table>
  `);
  return personas;

}

/**
 * Obtiene la fecha almacenada en el local storage
 * @returns {Date().getTime()}
 */
const obtenerFechaDelLocalStorage = async () => {
  const fechaSolicitud = localStorage.getItem("fechaSolicitud");
  const fecha = JSON.parse(fechaSolicitud);
  return fecha;
}

/**
 * Borra el string JSON de la informacion de los usuarios y la fecha almacenados en el local storage por la función almacenarDatosEnLocalStorage
 */
const borrarDatosDelLocalStorage = async() => {
  localStorage.removeItem("userData");
  localStorage.removeItem("fechaSolicitud");
}

/**
 * Crea un spinner con estilo bootstrap
 * @returns {String}
 */
const showSpinner = () => {
  const spinner = `
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>`

  return spinner;
}

/**
 * Deshabilita el botón del HTML si el argumento es true. Habilita el botón si el argumento es false.
 * @param {Boolean} valor 
 */
const desactivarBoton = (valor) => {
  startButton.disabled = valor;
}