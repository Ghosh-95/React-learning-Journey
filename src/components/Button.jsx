export default function Button({ eventHandler, children }) {

    return (
        <>
            <button onClick={eventHandler}>{children}</button>
        </>
    )
}