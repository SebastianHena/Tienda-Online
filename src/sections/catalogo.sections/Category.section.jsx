//Components
import { CardCategory } from "../../components/catalogo.components/category/CardCategory"
import { CarouselCategory } from "../../components/catalogo.components/category/CarouselCategory"
import { Title } from "../../components/UI.components/Title"

export const CategorySection = () => {
    return (
        <section className="flex justify-center">
            <section className="w-full h-auto  m-0">
                <article className="
                flex items-center justify-center w-full h-20 text-xl text-black font-semibold rounded-2xl hover:bg-white">
                    <Title text="NUESTRAS CATEGORÍAS" />
                </article>
                <article className="flex justify-center items-center w-full p-10 mb-10">
                    <CardCategory/>
                </article>
            </section>
        </section>
    )
}