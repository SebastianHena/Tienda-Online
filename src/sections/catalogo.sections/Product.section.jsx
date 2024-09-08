//Components
import { CardProduct } from "../../components/catalogo.components/product/CardProduct"
import { Title } from "../../components/UI.components/Title"
import { Separation } from "../../components/UI.components/Separation"


export const ProductSection = () => {
    return (
        <>
            <section className="flex flex-row justify-center items-center justify-items-center">
                <section className="w-full h-auto">
                    <article className="
            flex flex-col items-center justify-center w-full h-20 mb-24 text-black">
                        <h1 className="text-4xl mb-5">NUESTROS <span className="text-green-button">PRODUCTOS</span></h1>
                        <p className="text-2xl">Este es el catalogo de productos que manejamos en MamáAlNatural</p>
                    </article>
                    <article className="flex justify-center w-full p-4 mt-10 ">
                        <CardProduct />
                    </article>
                </section>
            </section>
            <Separation
                title="ASEGURATE DE SABER QUE ES LO MEJOR PARA TU CUERPO"
                subtitle="¡CONTACTANOS!"
            />
        </>
    )
}