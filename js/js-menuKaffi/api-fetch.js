import { Producto } from "./product-class";
import { Card } from "./card-class";

const getProductsUsingFetch = async (url) => {
    await fetch(url)
        .then((response) => { 
            return response.json();
        })
        .then(products => products.map((element,index,array) => {
                const objeto = new Producto(
                element.id,
                element.nombre,
                element.categoria,
                element.precio,
                element.descripcion,
                element.imagen
                )
                console.log(objeto);
                
                imprimirEnDOM(objeto);
            })
        )
        .catch((error) => {
            console.log(error);

        })
} 

getProductsUsingFetch('./lista-productos.json');



function imprimirEnDOM( products) {
    const productsContainer = document.getElementById("products-container");
    
    const productsTitle = products.map( 
       ( product )=>  new Card( product.name, product.price, product.description, product.image).kaffiCard() );
   
    productsContainer.innerHTML =  productsTitle.join("");
 }