//Components
import { Logo } from "./Logo.jsx"
import { Search } from "./Search.jsx"
import { Cart } from "./Cart.jsx"

export const SubHeader = () => {
    return (
        <nav className="flex justify-between bg-BodyProduct text-Text p-4 md:p-8">
            <div className="flex items-center justify-center gap-2 ">
                <Logo icon="icons/Fuxion.png" width="w-9" size="m-0 text-2xl" text="MamáAlNatural" />
            </div>
            <div className="flex w-[60%]">
                <Search
                styleForm="flex justify-center items-center w-full m-0 gap-2"
                styleInput="w-full p-2 text-sm border-2 border-solid border-gray-800 rounded-md bg-Card-color border-2 border-solid border-gray-300" 
                text="¿Buscas algo en especial?, ¡Aquí encuentras todos nuestros productos en un solo click!"
                styleIcon="w-9"
                icon="icons\lupa.png"
                />
            </div>
            <div className="Cart">
                <Cart icon="icons/carrito-de-compras.png"/>
            </div>
        </nav>
    )
}