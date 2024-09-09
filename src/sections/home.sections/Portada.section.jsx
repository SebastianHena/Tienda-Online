import { PortadaPrincipal } from "../../components/home.components/PortadaPrincipal"
import { Separation } from "../../components/UI.components/Separation"

export const Portada = ({ }) => {
    return (
        <>
            <section className="flex justify-center mt-28" id="home">
                <PortadaPrincipal />
            </section>
            <Separation
                title="¡DISFRUTA DE TODOS LOS PRODUCTOS QUE TENEMOS PARA TI!"
                subtitle="LIMPIA, REGENERA, REVITALIZA Y MUCHÍSIMAS 
                MÁS CATEGORÍAS DE PRODUCTOS"
            />
        </>
    )
}