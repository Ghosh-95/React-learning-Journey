import { useContext, useState } from 'react';
import { sculptureList, userContext } from '../utils/utilities';


export default function Gallery() {
    const { userName } = useContext(userContext);
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false);

    const hasPrev = index > 0;
    const hasNext = index < sculptureList.length - 1;

    function handleNextClick() {
        if (hasNext) setIndex(index + 1);
    };

    function hideAndShow() {
        setShowMore(!showMore);
    }

    function handlePrevClick() {
        if (hasPrev) setIndex(index - 1);
    }

    let sculpture = sculptureList[index];

    return (
        <>
            <button disabled={!hasNext} onClick={handleNextClick}>Next</button>
            <button disabled={!hasPrev} onClick={handlePrevClick}>Previous</button>
            <h2>
                <i>{sculpture.name}</i> by {sculpture.artist}
            </h2>

            <h3>{index + 1} of {sculptureList.length}</h3>

            <button onClick={hideAndShow} style={{ display: 'block', margin: '1rem auto' }}>{showMore ? 'Hide' : 'Show'} Details</button>

            <img src={sculpture.url} alt={sculpture.alt} />

            {showMore && <p>{sculpture.description}</p>}

            <div>
                <p style={{ marginTop: '3rem' }}>{userName}</p>
            </div>
        </>
    );
};