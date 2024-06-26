import { AiOutlineClose } from 'react-icons/ai';

export const Modal = ({ handleClose }) => {
    return (
        <div className="fixed inset-0 flex justify-end bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 w-96">
                <header>
                    <section className="flex justify-between">
                        <h1 className="text-black">Productos del carrito</h1>
                        <button className="text-gray-500 hover:text-gray-700" onClick={handleClose}>
                            <AiOutlineClose className="text-gray-500 hover:text-gray-700" />
                        </button>
                    </section>
                </header>
                <section>
                    <article className="min-w-0 flex-auto border border-cyan-900 rounded-md p-2 mt-4 mb-4">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Producto 1</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Descripción</p>
                    </article>
                    <article className="min-w-0 flex-auto border border-cyan-900 rounded-md p-2 mt-4 mb-4">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Producto 1</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Descripción</p>
                    </article>
                    <article className="min-w-0 flex-auto border border-cyan-900 rounded-md p-2 mt-4 mb-4">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Producto 1</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Descripción</p>
                    </article>
                    <article className="min-w-0 flex-auto border border-cyan-900 rounded-md p-2 mt-4 mb-4">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Producto 1</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Descripción</p>
                    </article>
                    <article className="min-w-0 flex-auto border border-cyan-900 rounded-md p-2 mt-4 mb-4">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Producto 1</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Descripción</p>
                    </article>
                </section>
                <section className="left-0 right-0 flex justify-center pb-8">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleClose}>
                        Ir a pagar
                    </button>
                </section>
            </div>
        </div>
    );
};
