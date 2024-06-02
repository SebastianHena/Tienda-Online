export const Icon = ({ icon, onClick }) => {
    return (
        <button onClick={onClick} className="inline-block transition-transform duration-200 ease-in-out hover:scale-125">
            <img src={icon} alt="Carrito de compras" className="w-8" />
        </button>
    )
}