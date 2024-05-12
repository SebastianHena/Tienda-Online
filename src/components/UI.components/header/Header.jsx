//hooks
import { useState } from "react"

//Components
import { Register } from "./auth/Register"
import { Login } from "./auth/Login"
import { Logo } from "../Logo"
import { Link } from "../Link"
import { Icon } from "../Icon"
import { Modal } from './cart/CartModal'


export const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <nav className="flex justify-between items-center bg-HeaderColor py-2 px-8 h-20">
            <div className="flex gap-1 items-center">
                <Logo icon="icons/Fuxion.png" width="w-8" size="m-0 text-2xl text-white" text="MamáAlNatural" />
            </div>
            <div className="flex gap-6 text-xl text-white">
                <Link text="Inicio" url="/" />
                <Link text="Productos" url="/product" />
                <Link text="Contacto" url="/contact" />
            </div>
            <div className="flex gap-8 items-center text-white">
                <Icon icon="icons/lupa.png" />
                <button onClick={handleShow} className="inline-block transition-transform duration-200 ease-in-out hover:scale-125">
                    <img src="icons/carrito.png" alt="Carrito de compras" className="w-8" />
                </button>
                {show && <Modal handleClose={handleClose} />}
                <div className="flex gap-4">
                    <Login text="Iniciar sesión" url="" />
                    <Register text="Registrarse" url="" />
                </div>
            </div>
        </nav>
    )
}

