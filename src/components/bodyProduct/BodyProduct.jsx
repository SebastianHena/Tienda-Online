//Components
import { Title } from "../header/Title"
import { Product } from "./Product"
//Style
import "/src/css/BodyProduct.css"
//import { Product } from "./Product.jsx"

export const BodyProduct = () => {
    return (
        <section className="Body">
            <div className="BodyProduct">
                <div className="TitleSectionProduct">
                    <Title text="Nuestros Productos" />
                </div>
                <div className="Product">
                    <Product />
                </div>
            </div>
        </section>
    )
}