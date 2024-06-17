//Components
import { Pagination } from "../../components/catalogo.components/pagination/Pagination"
import { CardProduct } from "../../components/catalogo.components/product/CardProduct"
import { Title } from "../../components/UI.components/Title"


export const ProductSection = () => {
    return (
        <>
        <section className="flex justify-center mt-8 ">
            <section className="w-97 h-auto  m-0">
                <article className="flex items-center justify-center w-full h-20 m-0 text-xl text-black font-semibold rounded-lg ">
                    <Title text="Catalogo de Productos" />
                </article>
                <article className="flex justify-center w-97 m-4 ">
                    <CardProduct />
                </article>
            </section>
        </section>
        </>
    )
}