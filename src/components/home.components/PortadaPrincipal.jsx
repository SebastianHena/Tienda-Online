export const PortadaPrincipal = () => {
    return (
        <>
            <section className="flex justify-start items-center text-black w-[80%]">
                <article className="felx flex-col mr-10">
                    <h1 className="text-4xl mb-2"><strong>ASESORIA Y VENTA DE PRODUCTOS <br /> NATURALES</strong></h1>
                    <h2 className="text-3xl text-green-500 mb-10"><strong>Productos de la línea FUXIÓN</strong></h2>
                    <p className="text-2xl">¡Brindamos el mejor acompañamiento <br /> y servicio cuando se trata de tu salud o bienestar!</p>
                    <article className="flex flex-row mt-10 justify-start items-center gap-6">
                        <div>
                            <button className="text-xl bg-green-button w-56 h-11 px-8 py-2 rounded-2xl">
                                Productos
                            </button>
                        </div>
                        <div>
                            <button className="text-xl bg-green-button w-56 h-11 px-8 py-2 rounded-2xl">
                                Contacto
                            </button>
                        </div>
                    </article>
                </article>
            </section>
        </>
    )
}