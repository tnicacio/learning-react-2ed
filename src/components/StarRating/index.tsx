import { useState } from 'react';
import { Star } from './Star';

export function StarRating({ totalStars = 5 }): JSX.Element {
  const [selectedStars, setSelectedStars] = useState(3);

  const createArray = (length: number) => [...Array(length)];

  return (
    <>
      { createArray(totalStars).map((n,i) => (
          <Star 
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)} />
      ))}
      <p>
        { selectedStars } of { totalStars } stars
      </p>
    </>
  )
}