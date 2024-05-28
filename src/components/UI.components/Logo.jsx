export const Logo = ({ icon, text, width, size }) => {
    return (
        <>
            <img src={icon} alt="" className={width}/><b className={size}>{text}</b>
        </>

    )
}