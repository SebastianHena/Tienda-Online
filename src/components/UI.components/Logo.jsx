export const Logo = ({ icon, text, width, size }) => {
    return (
        <>
        <section className="flex justify-center items-center gap-x-2">
            <article>
            <img src={icon} alt="" className={width}/>
            </article>
            <article>
            <b className={size}>{text}</b>
            </article>
        </section> 
        </>
    )
}