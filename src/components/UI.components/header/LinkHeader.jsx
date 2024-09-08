export const LinkHeader = ({ url, name }) => {
    return (
        <li className="text-gray-700 text-xl">
            <a href={url} className="custom-underline">{name}</a>
        </li>
    )
}