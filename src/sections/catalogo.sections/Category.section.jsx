//Components
import { CardCategory } from "../../components/catalogo.components/category/CardCategory"
import { Title } from "../../components/UI.components/Title"

export const CategorySection = () => {
    return (
        <section className="flex justify-center mt-8">
            <section className="w-[99%] h-auto  m-0">
                <article className="
                flex items-center justify-center w-full h-20 text-xl text-black font-semibold rounded-2xl mt-6 hover:bg-white">
                    <Title text="Nuestras categorías" />
                </article>
                <article className="flex justify-center items-center w-full p-10 mt-6 mb-10 bg-slate-500">
                    <CardCategory />
                </article>
            </section>
        </section>
    )
}