console.log("JS07 - apiFetch");

/*
 API: Application Programming Interface
   Permite la comunicación entre dos aplicaciones de software
   a travéz de un conjunto de reglas.

 La API Fetch nos ayuda a acceder y manipular 
 peticiones HTTP (DELETE, GET, POST, PUT).
 
 Sintaxis:
    fetch(resource, options)

*/

// const urlFakeStore = "https://fakestoreapi.com/products";
const urlFakeStore = "./pokemon.json";

/*
    se puede realizar un solo catch pero para ello se puede utilizar return en los then
*/
const getProducts = (url) => {
    // Realizando solicitud Get
    // .then() consume la promesa cuando sea resuelta
    // .catch() se ejecuta en caso de que la promesa sea rechazada
    fetch(urlFakeStore).
        then((response) => {
            console.log("status code: " + response.status);
            return response.json();
            // promesa conversión de JSON a Object
            // sin el then despues del response console.log( response.json ) mostraria Pomise pending;
        })
        .then(products => {
            // console.log(products) ;
            imprimirEnDOM(products);
        })
        .catch((error) => {
            console.log("Error en la solicitud GET");
            console.warn(error);
        });

};


const getProductsUsingAsyncAwait = async (url) => {

    try {
        const response = await fetch(url);
        const products = await response.json();
        imprimirEnDOM(products);
    } catch (error) {
        console.log(error);
    }

};

// getProducts(urlFakeStore);
getProductsUsingAsyncAwait( urlFakeStore );

function imprimirEnDOM(products) {
    const productsContainer = document.getElementById("products-container");

    // con el metodo map nos da un nuevo arreglo,
    // forEach modifica el arreglo original
    const productsTitle = products.map((product, index, array) => `
    
    <article class="col-sm-6 col-lg-3">
        <div class="card mx-auto" style="width: 13rem;">
        <img src="${product.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </article>    
`);

    console.log(productsTitle);

    productsContainer.innerHTML = productsTitle.join("");
}
