export default function Button({ eventHandler, children }) {
    // We can wrap the eventHandler prop and add as many line of code, then we can CALL the eventHandler function (prop)
    return (
        <>
            <button onClick={(e) => {
                e.stopPropagation();
                eventHandler();
            }}>{children}</button>
        </>
    )
}