export const Link = ({url, text}) => {
    return (
        <a href={url} className="hover:text-HoverHeader"><b>{text}</b></a>
    )
}