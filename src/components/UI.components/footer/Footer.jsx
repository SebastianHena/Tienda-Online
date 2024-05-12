//Components
import { Logo } from "../Logo"

export const Footer = () => {
    return (
        <div className="flex items-center justify-center bg-HeaderColor w-full gap-2 h-24 mt-8">
            <Logo icon="icons/Fuxion.png" width="w-6" text="MamáAlNatural - 2024" />
        </div>
    )
}