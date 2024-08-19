import { Button } from "bootstrap"
import { Icon } from "../Icon"

export const MenuHeader = () => {
    return (
        <>
            <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="flex justify-center">
                <Icon icon="/icons/Menu.svg"/>
            </button>
            <div id="dropdownInformation" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Bonnie Green</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                    <li>
                        <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Inicio</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Productos</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Categorias</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contacto</a>
                    </li>
                </ul>
                <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </>
    )
}