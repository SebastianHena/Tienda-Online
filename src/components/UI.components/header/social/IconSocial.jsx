export const IconSocial = ({ url, icon }) => {
    return (
        <a href={url} target="_blank" className="inline-block transition-transform duration-200 ease-in-out hover:scale-125">
            <img src={icon} alt="" className="w-6" /></a>
    )
}