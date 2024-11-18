const NoResultFound = () => {

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 shadow-lg w-full h-screen">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 118 0v1h1a2 2 0 012 2v7a2 2 0 01-2 2h-1v1a4 4 0 01-8 0v-1H7a2 2 0 01-2-2V7a2 2 0 012-2h1V4zm4-2a2 2 0 00-2 2v1h4V4a2 2 0 00-2-2zm-5 5v7a1 1 0 001 1h6a1 1 0 001-1V7a1 1 0 00-1-1H7a1 1 0 00-1 1z"
                    clipRule="evenodd"
                />
            </svg>
            <h1 className="text-xl font-bold text-gray-600 mt-4">No Results Found</h1>
            <p className="text-gray-500 text-center mt-2">
                Sorry, we couldn’t find anything that matches your search.
            </p>
        </div>

    )
}

export default NoResultFound;
