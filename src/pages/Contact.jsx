import { Footer } from "../components/footer/Footer"
import { CardContact } from "../contact/CardContact"

export const Contact = () => {
    return (
        <>
            <main className="w-full h-auto flex justify-center mt-8">
                <CardContact />
            </main>
            <Footer />
        </>
    )
}