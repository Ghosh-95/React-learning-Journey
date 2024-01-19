import { useState } from 'react';
import { sculptureList } from '../utils/utilities';


export default function Gallery() {
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false);

    function handleClick() {
        setIndex(index + 1);
    };

    function hideAndShow() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button onClick={handleClick}>Next</button>
            <h2>
                <i>{sculpture.name}</i> by {sculpture.artist}
            </h2>

            <h3>{index + 1} of {sculptureList.length}</h3>

            <button onClick={hideAndShow} style={{ display: 'block', margin: '1rem auto' }}>{showMore ? 'Hide' : 'Show'} Details</button>

            <img src={sculpture.url} alt={sculpture.alt} />

            {showMore && <p>{sculpture.description}</p>}
        </>
    );
};