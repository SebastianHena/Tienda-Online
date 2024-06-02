//Components
import { Logo } from "../Logo"
import { Resources } from "./resources/Resources"
import { Follow } from "./follows/Follow"
import { Legal } from "./legal/Legal"

export const Footer = () => {
    return (
        <footer class="mt-20 w-full h-auto">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <Logo icon="icons/Fuxion.png" width="w-8" size="m-0 text-2xl text-black" text="MamáAlNatural" />
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Recursos</h2>
                            <Resources url="#" name="Flowbite" />
                            <Resources url="#" name="JavaScript" />
                            <Resources url="#" name="Tailwind CSS" />
                            <Resources url="#" name="React" />
                            <Resources url="#" name="Python" />
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Siguenos en</h2>
                            <Follow  name="Facebook" url="#"/>
                            <Follow name="Instagram" url="#"/>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <Legal name="Política de privacidad" url="#" />
                            <Legal name="Terminos &amp; Condiciones" url="#" />
                        </div>
                    </div>
                </div>

                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-black sm:text-center ">© 2024 <a href="#" class="hover:underline">MamaAlNatural™</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}