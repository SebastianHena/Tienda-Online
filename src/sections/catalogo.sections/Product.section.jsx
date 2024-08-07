//Components
import { CardProduct } from "../../components/catalogo.components/product/CardProduct"
import { Title } from "../../components/UI.components/Title"


export const ProductSection = () => {
    return (
        <>
        <section className="flex justify-center items-center justify-items-center mt-8">
            <section className="w-[99%] h-auto">
                <article className="
                flex items-center justify-center w-full h-20 text-xl text-black font-semibold rounded-2xl
                hover:bg-white">
                    <Title text="Catalogo de Productos" />
                </article>
                <article className="flex justify-center w-full p-4 mt-10 mb-10 bg-white">
                    <CardProduct />
                </article>
            </section>
        </section>
        </>
    )
}