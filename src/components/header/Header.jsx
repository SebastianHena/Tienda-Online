//Hooks
//Components
import { Social } from "./social/Social"
import { Title } from "./Title"
import { Register } from "./Register"
import { Login } from "./Login"

export const Header = () => {
    return (
        <nav className="flex justify-between bg-BodyProduct py-2 px-8 h-12">
            <div className="flex items-center gap-2">
                <Social text="Siguenos en: " />
            </div>
            <div className=" text-4xl">
                <Title className="flex items-center w-full m-0" text="MamáAlNatutalShop" />
            </div>
            <div className="flex items-center gap-4">
                <Login url="http://localhost:5173/"
                    text="Iniciar Sesión" />
                <Register
                    url="http://localhost:5173/"
                    text="Registrarse" />
            </div>
        </nav>
    )
}