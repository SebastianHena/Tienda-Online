//Components
import { Logo } from "./Logo.jsx"
import { Search } from "./Search.jsx"
import { Cart } from "./Cart.jsx"

//Style
import "/src/css/SubHeader.css"

export const SubHeader = () => {
    return (
        <nav className="SubHeader">
            <div className="Logo">
                <Logo icon="icons/Fuxion.png" text="MamáAlNatural" />
            </div>
            <div className="Search">
                <Search 
                text="¿Buscas algo en especial?, ¡Aquí encuentras todos nuestros productos en un solo click!"
                icon="icons\lupa.png"
                />
            </div>
            <div className="Cart">
                <Cart icon="icons/carrito-de-compras.png"/>
            </div>
        </nav>
    )
}