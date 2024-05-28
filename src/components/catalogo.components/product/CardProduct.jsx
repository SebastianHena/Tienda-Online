//Hooks
import { useState, useEffect } from "react";

//Components boostrap
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

//Services
import { getProduct } from "../../../services/product.services/product/product.services";


export const CardProduct = () => {

  const [products, setProducts] = useState([])

  useEffect(() => { getProduct().then(setProducts) }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {
          products.length === 0 ? (
            <p className="text-black">No hay productos disponibles.</p>
          ) : (
            products.map(product => (
              <div key={product.ID_PRODUCT} className="m-4">
                <Card className="w-52 h-auto bg-white bg-opacity-80 rounded-lg p-4">
                  <Card.Img variant="top" src={product.IMAGE} className="w-full flex rounded-2xl" />
                  <Card.Body className="flex justify-center items-stretch flex-col w-full">
                    <Card.Title className="m-1 w-full text-lg text-black font-semibold whitespace-nowrap truncate" >
                      {product.NAME}
                    </Card.Title>
                    <Card.Text className="m-1 w-full text-black text-opacity-85 whitespace-nowrap truncate">
                      {product.DESCRIPTION}
                    </Card.Text>
                    <div className="flex items-center mt-2">
                      <Card.Text className="m-1 w-full text-xs text-black font-bold text-opacity-85">
                        <p>{product.PRICE}$ COP</p>
                      </Card.Text>
                      <Button className="bg-slate-600 rounded-md p-1 w-full text-xs text-white font-semibold hover:bg-gray-800">
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