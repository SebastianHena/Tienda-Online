export const Separation = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col justify-center items-center bg-green-custom mt-36 mb-20 w-full h-72 p-6 sm:-0">
            <h1 className="text-2xl text-center sm:text-4xl text-gray-400 mb-5">{title}</h1>
            <h2 className="text-base text-center sm:text-2xl">{subtitle}</h2>
        </div>
    )
}
