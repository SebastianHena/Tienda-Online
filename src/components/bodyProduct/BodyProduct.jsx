//Components
import { Title } from "../header/Title"
import { Product } from "./Product"

export const BodyProduct = () => {
    return (
        <section className="flex justify-center mt-8">
            <div className="w-97 h-auto bg-BodyProduct m-0">
                <div className="flex items-center justify-center w-full m-0 text-4xl">
                    <Title text="Nuestros Productos" />
                </div>
                <div className="flex justify-center w-97 bg-Product m-4">
                    <Product />
                </div>
            </div>
        </section>
    )
}