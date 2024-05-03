export const Cart = ({ icon }) => {
    return (
        <a href=""
            className="inline-block transition-transform 
            duration-200 ease-in-out hover:scale-125">
            <img src={icon} alt=""
                className="w-[40%] flex justify-center" />
        </a>
    )
}