//Components
import { CardCategory } from "../../components/catalogo.components/category/CardCategory"
import { Title } from "../../components/UI.components/Title"

export const CategorySection = () => {
    return (
        <section className="flex justify-center mt-8">
                <section className="w-97 h-auto  m-0">
                    <article className="flex items-center justify-center h-20 m-0 text-xl text-black font-semibold rounded-lg">
                        <Title text="Categorias" />
                    </article>
                    <article className="flex justify-center w-97 m-4">
                        <CardCategory />
                    </article>
                </section>
            </section>
    )
}