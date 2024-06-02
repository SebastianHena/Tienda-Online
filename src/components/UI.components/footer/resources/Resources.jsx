export const Resources = ({ url, name }) => {
    return (
        <ul class="text-black font-medium">
            <li class="mb-4">
                <a href={url} class="hover:underline">{name}</a>
            </li>
        </ul>
    )
}