//Hooks
import { useState, useEffect } from "react";

//Components boostrap
import { Card } from "react-bootstrap";

//Services
import { getCategory } from "../../../services/product.services/category/category.services";


export const Category = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => { getCategory().then(setCategories) }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {
          categories.length === 0 ? (
            <p>No hay categorias disponibles.</p>
          ) : (
          categories.map(category => (
            <div key={category.ID_CATEGORY} className="m-4">
              <Card className="w-30 h-auto rounded-lg p-4 border border-cyan-950">
                <Card.Img variant="top" src={category.IMAGE} className="w-full flex rounded-2xl" />
                <Card.Body className="flex justify-center items-stretch flex-col w-full">
                  <Card.Title className="m-1 w-full text-xs font-bold whitespace-nowrap truncate" >
                    {category.NAME}
                  </Card.Title>
                  <Card.Text className="m-1 w-full whitespace-nowrap truncate">
                    {category.DESCRIPTION}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          )
          ))}
      </div>
    </>
  )
}