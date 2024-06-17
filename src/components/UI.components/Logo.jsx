export const Logo = ({ icon, text, width, size }) => {
    return (
        <>
            <section className="flex justify-center items-center gap-x-2">
                <article>
                    <img src={icon} className={width} />
                </article>
                <article>
                    <strong className={size}>{text}</strong>
                </article>
            </section>
        </>
    )
}