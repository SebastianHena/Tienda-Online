//Hooks
import { useState, useEffect } from "react";

//Components boostrap
import { Card } from "react-bootstrap";

//Services
import { getCategory } from "../../../services/product.services/category/category.services";


export const CardCategory = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => { getCategory().then(setCategories) }, []);

  return (
    <>
      <section className="flex flex-wrap justify-center items-center">
        {
          categories.length === 0 ? (
            <p className="flex justify-center items-center text-black">No hay categorias disponibles.</p>
          ) : (
            categories.map(category => (
              <article key={category.ID_CATEGORY} className="m-4">
                <Card className="w-48 h-auto bg-gray-300 bg-opacity-95 rounded-md p-4">
                  <Card.Img variant="top" src={category.IMAGE} className="w-full flex rounded-2xl" />
                  <Card.Body className="flex flex-col justify-center items-center py-4 px-2 w-full truncate">
                    <Card.Title className="flex justify-center items-center m-1 w-full text-xs text-black font-semibold">
                      {category.NAME}
                    </Card.Title>
                    <Card.Text className="m-1 w-full text-black text-opacity-85">
                      {category.DESCRIPTION}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </article>
            )
            ))}
      </section>
    </>
  )
}