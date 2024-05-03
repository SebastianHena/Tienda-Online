export const Search = ({ text, icon, styleInput, styleForm, styleIcon }) => {
    return (
        <>
            <form className={styleForm}>
                <input type="text" placeholder={text} className={styleInput}/> <button><img src={icon} alt="" className={styleIcon}/></button>
            </form> 
        </>
    )
}