//Components
import { Register } from "./auth/Register"
import { Login } from "./auth/Login"
import { Logo } from "../varied/Logo"
import { Link } from "../varied/Link"
import { Icon } from "../varied/Icon"

export const Header = () => {
    return (
        <nav className="flex justify-between items-center bg-HeaderColor py-2 px-8 h-20">
            <div className="flex gap-1 items-center">
                <Logo icon="icons/Fuxion.png" width="w-8" size="m-0 text-2xl text-white" text="MamáAlNatural" />
            </div>
            <div className="flex gap-6 text-xl text-white">
                <Link text="Inicio" url="/" />
                <Link text="Productos" url="/product" />
                <Link text="Blog" url="/blog" />
                <Link text="Contacto" url="/contact" />
            </div>
            <div className="flex gap-8 items-center text-white">
                <Icon icon="icons/lupa.png" />
                <Icon icon="icons/carrito.png" />
                <div className="flex gap-4">
                    <Login text="Iniciar sesión" url="" />  
                    <Register text="Registrarse" url="" />
                </div>
            </div>
        </nav>
    )
}
