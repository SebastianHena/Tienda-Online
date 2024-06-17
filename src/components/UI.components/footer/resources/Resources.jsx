export const Resources = ({ url, name }) => {
    return (
        <ul className="font-medium">
            <li className="mb-4">
                <a href={url} className="hover:underline">{name}</a>
            </li>
        </ul>
    )
}