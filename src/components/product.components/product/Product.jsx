//Hooks
import { useState, useEffect } from "react";

//Components boostrap
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

//Services
import { getProduct } from "../../../services/product.services/product/product.services";


export const Product = () => {

  const [products, setProducts] = useState([])

  useEffect(() => { getProduct().then(setProducts) }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {
          products.length === 0 ? (
            <p>No hay productos disponibles.</p>
          ) : (
            products.map(product => (
              <div key={product.ID_PRODUCT} className="m-4">
                <Card className="w-52 h-auto bg-Card-color rounded-2xl p-4 border border-cyan-950">
                  <Card.Img variant="top" src={product.IMAGE} className="w-full flex rounded-2xl" />
                  <Card.Body className="flex justify-center items-stretch flex-col w-full">
                    <Card.Title className="m-1 w-full text-lg font-bold whitespace-nowrap truncate" >
                      {product.NAME}
                    </Card.Title>
                    <Card.Text className="m-1 w-full whitespace-nowrap truncate">
                      {product.DESCRIPTION}
                    </Card.Text>
                    <div className="flex items-center mt-2">
                      <Card.Text className="m-1 w-full text-xs">
                        <p>{product.PRICE}$ COP</p>
                      </Card.Text>
                      <Button className="bg-slate-600 rounded-md p-1 w-full text-xs text-white font-bold hover:bg-gray-800">
                        Agregar al carrito
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            )
            ))}
      </div>
    </>
  )
}