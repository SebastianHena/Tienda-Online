//Components
import { IconSocial } from "./IconSocial"


export const Social = ({ text }) => {
    return (
        <>
            <b>{text}</b>
            <IconSocial url="https://facebook.com" icon="icons\facebook.png" />
            <IconSocial url="https://instagram.com" icon="icons\instagram.png" />
        </>


    )
}