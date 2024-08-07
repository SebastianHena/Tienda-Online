export const PaginationProduct = ({ productForPage, currentPage, setCurrentPage, totalProducts }) => {

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

    const disableButton = () => {
        if (currentPage > 1)
            setCurrentPage(previusPage)
        else
            setCurrentPage(disabled)
    }


    return (
        <div className="flex items-center justify-between w-full h-auto mt-8 px-4 py-3 sm:px-6">

            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <nav className="flex justify-between gap-10 items-center isolate  rounded-md" aria-label="Pagination">
                        <div>
                            <button
                                className={`relative cursor-pointer inline-flex items-center rounded-l-md px-2 py-2 bg-gray-800 hover:bg-gray-700 focus:z-20 focus:outline-offset-0
                                ${currentPage < 1 ? 'disabled:pointer-events-none' : ''}`}
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

                                className={`relative cursor-pointer inline-flex items-center rounded-r-md px-2 py-2 bg-gray-800 hover:bg-gray-700 focus:z-20 focus:outline-offset-0
                                ${currentPage > pageNumber.length ? 'disabled:pointer-events-none' : ''}`}
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
