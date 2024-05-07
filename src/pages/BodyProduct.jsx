//Components
import { Title } from "../components/varied/Title"
import { Product } from "../components/product/product/Product"
import { Footer } from "../components/footer/Footer"
import { Category } from "../components/product/category/Category"

export const BodyProduct = () => {
    return (
        <>
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
            <Footer />
        </>
    )
}