export const Link = ({url, text}) => {
    return (
        <a href={url} className="hover:text-gray-500"><b>{text}</b></a>
    )
}