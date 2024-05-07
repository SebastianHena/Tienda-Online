export const PresentationCard = ({ title, description, src }) => {
    return (
        <main className="flex justify-center">
            <div className="flex gap-4 p-4 h-auto w-4/5 items-start">
                <img src={src} alt="" className="w-48 object-cover rounded-lg" />
                <div className="flex flex-col gap-2">
                    <h1 className="w-full">{title}</h1>
                    <p className="w-full">{description}</p>
                </div>
            </div>
        </main>
    )
}
