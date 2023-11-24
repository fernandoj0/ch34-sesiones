console.log("JS09 - NPM");


const url = "https://fakestoreapi.com/users";

const getUsersUsingFetch = ( url ) => {
    fetch(url)
    .then( (respuesta) => {
        return respuesta.json();
    })
    .then( (users) => {
        console.log(users);
    })
    .catch( (error) => {
        console.log(error);
    });

}

getUsersUsingFetch( url );

const getUsersUsingAxios = async ( url ) => {
    try {
     const users = await axios.get( url );
     console.log( users.data );        
    } catch (error) {
        console.log(error);
    }
}

getUsersUsingAxios( url );

const postUsingAxios = async (  ) =>{
    const url = "https://reqres.in/api/users";
    const user = {
      name: "Aldo",
      job: "Developer Ch35"
    }
 
    const response = await axios.post( url, user );
    console.log( response.data );
 }

 postUsingAxios();

 const postUsingFetch = async (  ) =>{
    const url = "https://reqres.in/api/users";
    const user = {
      name: "Aldo",
      job: "Developer Ch35"
    }
 
    const response = await fetch( url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
 
        },
        body: JSON.stringify(user), // body data type must match "Content-Type" header
      });
    const newUser = await response.json();
    console.log( "Fetch" , newUser );
 }


 postUsingFetch();
