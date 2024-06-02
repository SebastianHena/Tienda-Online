//Components
import { CardProduct } from "../../components/catalogo.components/product/CardProduct"
import { Title } from "../../components/UI.components/Title"


export const ProductSection = () => {
    return (
        <section className="flex justify-center mt-8 ">
            <div className="w-97 h-auto  m-0">
                <div className="flex items-center justify-center w-full h-20 m-0 text-xl text-black font-semibold rounded-lg ">
                    <Title text="Catalogo de Productos" />
                </div>
                <div className="flex justify-center w-97 m-4 ">
                    <CardProduct />
                </div>
            </div>
        </section>
    )
}