const GET_PRODUCTS = 'http://127.0.0.1:8000/product'

export const getProduct = () => {
    return fetch(GET_PRODUCTS)
      .then(res => res.json())
      .then(data => {
        console.log("Datos recibidos:", data);
        return(data);
      })
      /*
      .catch(error => {
        console.error("Error al obtener los datos:", error);
      });*/ 
}