//Hooks
import { useState, useEffect } from "react";
//Components boostrap
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';



const GET_PRODUCTS = 'http://127.0.0.1:8000/product'

export const Product = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(GET_PRODUCTS)
      .then(res => res.json())
      .then(data => {
        console.log("Datos recibidos:", data);
        setProducts(data);
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "start", alignItems: "center" }}>
        {
          products.map(product => (
            <div key={product.ID_PRODUCT} style={{ margin: "1rem" }}>
              <Card style={{ width: '11.5rem', height: "auto", background: "#F9F9F9", borderRadius: "1rem", padding: "1rem" }}>
                <Card.Img variant="top" src={product.IMAGE} style={{ width: "100%", display: "flex", borderRadius: "1rem" }} />
                <Card.Body style={{ display: "flex", justifyContent: "center", alignItems: "stretch", flexDirection: "column", width: "100%" }}>
                  <Card.Title>{product.NAME}</Card.Title>
                  <Card.Text style={{ margin: "0" }}>
                    {product.DESCRIPTION}
                  </Card.Text>
                  <Card.Text style={{ margin: "0" }}>
                    {product.DESCRIPTION}
                  </Card.Text>
                  <Card.Text style={{ margin: "0" }}>
                    <p>Precio: {product.PRICE}$ COP</p>
                  </Card.Text>
                  <Button variant="primary">
                    Agregar al carrito
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </>
  )
}