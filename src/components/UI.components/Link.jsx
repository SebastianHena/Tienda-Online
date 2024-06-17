export const Link = ({url, text}) => {
    return (
        <a href={url} className="hover:text-gray-500">{text}</a>
    )
}