//Components
import { CardProduct } from "../../components/catalogo.components/product/CardProduct"
import { Title } from "../../components/UI.components/Title"


export const ProductSection = () => {
    return (
        <>
        <section className="flex flex-row justify-center items-center justify-items-center">
            <section className="w-full h-auto">
                <article className="
                flex items-center justify-center w-full h-20 text-xl text-black font-semibold rounded-2xl
                hover:bg-white">
                    <Title text="CATALOGO DE PRODUCTOS" />
                </article>
                <article className="flex justify-center w-full p-4 mt-10 mb-10 ">
                    <CardProduct />
                </article>
            </section>
        </section>
        </>
    )
}