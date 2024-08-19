import { FormContact } from "../../components/contact.components/FormContact"
import { Title } from "../../components/UI.components/Title"

FormContact

export const CardContact = () => {
    return (
        <section className="flex justify-center">
        <section className="w-full h-auto  m-0">
            <article className="
            flex items-center justify-center w-full h-20 text-xl text-black font-semibold rounded-2xl mt-6 hover:bg-white">
                <Title text="¡CONTACTATE CON NOSOTROS!" />
            </article>
            <article className="flex justify-center items-center w-full p-10 mb-10">
            <FormContact />
            </article>
        </section>
    </section>
    )
}
