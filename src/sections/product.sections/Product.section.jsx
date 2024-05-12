//Components
import { Product } from "../../components/product.components/product/Product"
import { Title } from "../../components/UI.components/Title"


export const ProductSection = () => {
    return (
        <section className="flex justify-center mt-8 ">
            <div className="w-97 h-auto  m-0">
                <div className="flex items-center justify-center w-full h-20 m-0 text-2xl bg-BodyProduct rounded-lg ">
                    <Title text="Nuestros Productos" />
                </div>
                <div className="flex justify-center w-97 m-4 ">
                    <Product />
                </div>
            </div>
        </section>
    )
}