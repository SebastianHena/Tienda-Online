import { FormContact } from "../../components/contact.components/FormContact"
import { Title } from "../../components/UI.components/Title"

FormContact

export const CardContact = () => {
    return (
        <section className="flex justify-center" id="contact">
            <section className="w-full h-auto m-0">
                <article className="
            flex flex-col items-center justify-center w-full h-20 mb-12 text-black">
                    <h1 className="text-4xl mb-5">¿TIENES ALGUNA <span className="text-green-button">DUDA?</span></h1>
                    <p className="text-center text-2xl">Queremos darte la mejor de la soluciones, te responderemos muy pronto.</p>
                </article>
                <article className="flex justify-center items-center w-full p-10 mb-10">
                    <FormContact />
                </article>
            </section>
        </section>
    )
}
