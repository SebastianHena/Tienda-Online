export const Link = ({url, text}) => {
    return (
        <a href={url} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{text}</a>
    )
}