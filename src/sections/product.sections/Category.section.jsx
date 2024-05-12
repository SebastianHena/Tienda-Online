//Components
import { Category } from "../../components/product.components/category/Category"
import { Title } from "../../components/UI.components/Title"

export const CategorySection = () => {
    return (
        <section className="flex justify-center mt-8">
                <div className="w-97 h-auto  m-0">
                    <div className="flex items-center justify-center h-20 m-0 text-2xl bg-BodyProduct rounded-lg">
                        <Title text="Categorias" />
                    </div>
                    <div className="flex justify-center w-97  m-4">
                        <Category />
                    </div>
                </div>
            </section>
    )
}