export default function Button() {
    const buttonHandler = () => alert('Button two clicked');
    return (
        <>
            <button onClick={() => alert('Button one Clicked')} style={{ marginRight: '1rem' }}>Click Me</button>
            <button onClick={buttonHandler}>Click Me 🚀</button>
        </>
    )
}