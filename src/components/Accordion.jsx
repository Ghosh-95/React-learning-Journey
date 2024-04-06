import { useState } from "react"

function Panel({ children, title, isActive, onShow }) {
    return (
        <>
            <h1>{title}</h1>
            {isActive && <p>{children}</p>}
            <button onClick={onShow}>{isActive ? "Hide" : "Show"}
            </button>
        </>
    )
}

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section>
            <Panel
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
                title={"About"}>
                With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
            </Panel>

            <Panel
                title={"Entimology"}
                onShow={() => setActiveIndex(1)}
                isActive={activeIndex === 1}>
                The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.

            </Panel>
        </section>
    )
}