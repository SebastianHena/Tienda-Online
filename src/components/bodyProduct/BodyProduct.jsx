//Components
import { Title } from "../header/Title"
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
                    <h1></h1>
                </div>
            </div>
        </section>
    )
}