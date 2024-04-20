//Hooks
//Components
import { Social } from "./social/Social"
import { Title } from "./Title"
import { Register } from "./Register"
import { Login } from "./Login"
//Style
import "/src/css/Header.css"

export const Header = () => {
    return (
        <nav className="Header">
            <div className="Social">
                <Social text="Siguenos en: " />
            </div>
            <div className="TitleHeader">
                <Title text="MamáAlNatutalShop" />
            </div>
            <div className="auth">
                <Login url="http://localhost:5173/"
                    text="Iniciar Sesión" />
                <Register
                    url="http://localhost:5173/"
                    text="Registrarse" />
            </div>
        </nav>
    )
}