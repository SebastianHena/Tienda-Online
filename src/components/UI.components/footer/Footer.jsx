//Components
import { Logo } from "../Logo"

export const Footer = () => {
    return (
        <footer className="flex items-center justify-center bg-HeaderColor w-full gap-2 h-24 mt-8 text-white">
            <Logo icon="icons/Fuxion.png" width="w-6" text="MamáAlNatural - 2024" />
        </footer>
    )
}