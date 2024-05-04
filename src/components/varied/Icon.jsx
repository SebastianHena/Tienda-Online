export const Icon = ({ icon }) => {
    return (
        <a href=""
            className="inline-block transition-transform 
            duration-200 ease-in-out hover:scale-125">
            <img src={icon} alt=""
                className="w-8" />
        </a>
    )
}