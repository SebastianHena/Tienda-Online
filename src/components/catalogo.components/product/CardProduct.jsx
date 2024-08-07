//Hooks
import { useState, useEffect } from "react";

//Components boostrap
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

//Services
import { getProduct } from "../../../services/product.services/product/product.services";
import { PaginationProduct } from "../pagination/PaginationProduct";


export const CardProduct = () => {

  const [products, setProducts] = useState([])
  const totalProducts = products.length
  const [productForPage, setProductForPage] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)

  const lastIndex = currentPage * productForPage
  const firstIndex = lastIndex - productForPage


  useEffect(() => { getProduct().then(setProducts) }, []);

  return (
    <>
      <section className="grid justify-center items-center justify-items-center">
        <section className="flex flex-wrap justify-center items-center">
          {
            products.length === 0 ? (
              <p className="text-black">No hay productos disponibles.</p>
            ) : (
              products.map(product => (
                <article key={product.ID_PRODUCT} className="m-4">
                  <Card className="w-52 h-auto border-black border bg-opacity-80 rounded-lg p-4 transition hover:scale-110 hover:bg-gray-300">
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
                          {product.PRICE}$ COP
                        </Card.Text>
                      </div>
                      <Button className="flex justify-center mt-2 justify-items-center bg-slate-600 rounded-md p-3 w-full text-xs text-white font-semibold hover:bg-gray-800">
                          Agregar al carrito
                        </Button>
                    </Card.Body>
                  </Card>
                </article>
              )
              )).slice(firstIndex, lastIndex)}
        </section>
        <section>
          <article>
            <PaginationProduct
              productForPage={productForPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalProducts={totalProducts}
            />
          </article>
        </section>
      </section>
    </>
  )
}