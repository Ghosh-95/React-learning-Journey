import { useState } from 'react';
import { sculptureList } from '../utils/utilities';


export default function Gallery() {
    let index = 0;

    function handleClick() {
        index = index + 1;
        return index;
    };

    let sculpture = sculptureList[index];

    return (
        <>
            <button onClick={handleClick}>Next</button>
            <h2>
                <i>{sculpture.name}</i> by {sculpture.artist}
            </h2>

            <h3>{index + 1} of {sculptureList.length}</h3>

            <img src={sculpture.url} alt={sculpture.alt} />

            <p>{sculpture.description}</p>
        </>
    );
};