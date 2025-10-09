import { AiOutlineClose } from 'react-icons/ai';
import { useCart } from "../../../../context/CartContext.jsx";

//alerts
import toast from "react-hot-toast";

export const Modal = ({ handleClose }) => {

    const { cartItems, removeFromCart } = useCart();

    return (
        <div className="fixed inset-0 flex justify-end bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-6 w-auto">

            //Encabezado del modal
                <header>
                    <section className="flex justify-between">
                        <h1 className="text-black">Productos del carrito</h1>
                        <button className="text-gray-500 hover:text-gray-700" onClick={handleClose}>
                            <AiOutlineClose className="text-gray-500 hover:text-gray-700" />
                        </button>
                    </section>
                </header>

            //Contenido del carrito
                <section className="space-y-3 max-h-96 overflow-y-auto">
                    {cartItems.length === 0 ? (
                        <p className="text-center text-gray-500 text-sm">
                            Tu carrito está vacío.
                        </p>
                    ) : (
                        cartItems.map((item) => (
                            <article
                                key={item.id}
                                className="border border-gray-200 rounded-lg p-3 flex items-center gap-3 shadow-sm hover:shadow-md transition"
                            >
                                {/* Imagen del producto */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded-md border border-gray-200"
                                />

                                {/* Información del producto */}
                                <div className="flex-1">
                                    <h2 className="font-semibold text-gray-800 text-sm truncate">{item.name}</h2>
                                    <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
                                    <p className="text-sm font-medium text-gray-700 mt-1">{item.price} COP</p>
                                    <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                                </div>

                                {/* Botón eliminar */}
                                <button
                                    onClick={() => {removeFromCart(item.id)
                                        toast.success('¡Producto eliminado del carrito 🛒!');
                                    }}
                                    className="text-red-500 hover:text-red-700 text-xs font-medium"
                                >
                                    Eliminar
                                </button>
                            </article>
                        ))
                    )}
                </section>

                //Boton de ir a pagar
                <section className="left-0 right-0 flex justify-center pb-8">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleClose}>
                        Ir a pagar
                    </button>
                </section>
            </div>
        </div>
    );
};
