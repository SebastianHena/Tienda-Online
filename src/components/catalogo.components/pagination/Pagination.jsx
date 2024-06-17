export const Pagination = ({ productForPage, currentPage, setCurrentPage, totalProducts }) => {

    const pageNumber = []


    for (let i = 1; i <= totalProducts / productForPage; i++) {
        pageNumber.push(i);
    }

    const previusPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }
    
    const specificPage = (n) => {
        setCurrentPage(n)
    }


    return (
        <div className="flex items-center justify-between w-full h-auto mt-8 px-4 py-3 sm:px-6">


            <div className="flex flex-1 justify-between gap-2 sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md text-black px-4 py-2 text-sm font-medium hover:bg-gray-50"
                >
                    Anterior
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md  text-black px-4 py-2 text-sm font-medium hover:bg-gray-50"
                >
                    Siguiente
                </a>
            </div>


            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <nav className="flex justify-between gap-10 items-center isolate  rounded-md" aria-label="Pagination">
                        <div>
                            <button
                                disabled
                                className={`relative cursor-pointer inline-flex items-center rounded-l-md px-2 py-2 text-black hover:bg-gray-50 focus:z-20 focus:outline-offset-0
                                ${currentPage === 1 ? 'disabled:pointer-events-none' : ''}`}
                                onClick={previusPage}
                            >
                                Anterior
                            </button>
                        </div>

                        <ul className="flex gap-4">
                            {
                                pageNumber.map(numPage => (
                                    <li key={numPage}>
                                        <a
                                            aria-current="page"
                                            className={`relative cursor-pointer z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-black rounded focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                                            ${numPage === currentPage ? 'bg-indigo-600' : 'bg-white'}`}
                                            onClick={() => specificPage(numPage)}
                                        >
                                            {numPage}
                                            
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>

                        <div>
                            <button
                            
                                className={`relative cursor-pointer inline-flex items-center rounded-r-md px-2 py-2 text-black hover:bg-gray-50 focus:z-20 focus:outline-offset-0
                                ${currentPage >= pageNumber.length ? `${'disabled'}` : ''}`}
                                onClick={nextPage}
                            >
                                Siguiente
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
