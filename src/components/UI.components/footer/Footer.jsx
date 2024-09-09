//Components
import { Logo } from "../Logo"
import { Resources } from "./resources/Resources"
import { Follow } from "./follows/Follow"
import { Legal } from "./legal/Legal"

export const Footer = () => {
    return (
        <footer className="grid justify-items-center mt-8 bg-gray-900">
            <section className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <section className="md:flex md:justify-between">
                    <article className="mb-6 md:mb-0">
                        <h2 className="text-white text-xl">
                            <strong>MAMÁAL</strong>
                            <span className="text-gray-600">NATURAL</span>
                        </h2>
                    </article>
                    <section className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <article>
                            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase ">Recursos</h2>
                            <Resources url="#" name="Flowbite" />
                            <Resources url="#" name="JavaScript" />
                            <Resources url="#" name="Tailwind CSS" />
                            <Resources url="#" name="React" />
                            <Resources url="#" name="Python" />
                        </article>
                        <article>
                            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase">Siguenos en</h2>
                            <Follow name="Facebook" url="#" />
                            <Follow name="Instagram" url="#" />
                        </article>
                        <article>
                            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase">Legal</h2>
                            <Legal name="Política de privacidad" url="#" />
                            <Legal name="Terminos &amp; Condiciones" url="#" />
                        </article>
                    </section>
                </section>
                <section>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm sm:text-center ">© 2024 <a href="#" className="hover:underline">MamaAlNatural™</a>. All Rights Reserved.
                        </span>
                    </div>
                </section>
            </section>
        </footer>
    )
}