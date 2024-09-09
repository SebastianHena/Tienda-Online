const GET_CATEGORIES = 'http://127.0.0.1:8000/category'

export const getCategory = () => {
  return fetch(GET_CATEGORIES)
    .then(res => res.json())
    .then(data => {
      console.log("Datos recibidos:", data);
      return (data)
    })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
      });
}