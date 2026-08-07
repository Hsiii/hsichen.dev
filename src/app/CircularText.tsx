import type { CSSProperties } from 'react';

interface CircularTextProps {
    text: string;
}

export default function CircularText({ text }: CircularTextProps) {
    const characters = Array.from(text, (character) => character);

    return (
        <span
            aria-hidden='true'
            className='circular-text'
            style={
                {
                    '--character-count': characters.length,
                } as CSSProperties
            }
        >
            <span className='circular-text__motion'>
                {characters.map((character, index) => (
                    <span
                        className='circular-text__character'
                        key={`${character}-${index}`}
                        style={{ '--character-index': index } as CSSProperties}
                    >
                        {character}
                    </span>
                ))}
            </span>
        </span>
    );
}
