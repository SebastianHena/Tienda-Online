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
              <article key={category.ID_CATEGORY}>
                <Card className="w-60 h-auto p-4 truncate">
                  <Card.Img variant="top" src="/icons/photo.svg" className="w-full flex" />
                  <Card.Body className="flex flex-col justify-start items-center py-4 px-2 w-full">
                    <Card.Title className="flex justify-between 
                    text-left font-black text-[30px] text-black font-sans text-shadow-custom text-clip overflow-hidden"
                    >
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