export const Search = ({ text, icon }) => {
    return (
        <>
            <form>
                <input type="text" placeholder={text} /> <button><img src={icon} alt="" /></button>
            </form> 
        </>
    )
}