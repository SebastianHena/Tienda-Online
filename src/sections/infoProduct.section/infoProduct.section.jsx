//Components boostrap
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


export const InfoProduct = () => {
    return (
        <>
            <section className="flex justify-center items-center justify-items-center gap-4">
                <article className="w-[50%]">
                    <Card className="flex w-full h-auto items-center gap-16 bg-white bg-opacity-80 rounded-lg p-4">
                        <Card.Img variant="top" src="icons/product.svg" className=" flex justify-center items-center justify-items-center w-full ml-10 rounded-2xl" />
                        <div>
                            <Card.Body className="flex justify-center items-stretch flex-col w-auto gap-8">
                                <Card.Title className="text-black">
                                    Titulo del producto
                                </Card.Title>
                                <Card.Text className="text-black">
                                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor N. del T.
                                </Card.Text>
                                <Card.Text className="text-black">
                                    Precio del producto
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </article>
            </section>
        </>
    )
}