import { useState } from 'react';
import { Star } from './Star';

interface StarRatingProps {
  style?: React.CSSProperties;
  totalStars?: number;
}

export function StarRating({ style = {} ,totalStars = 5 }: StarRatingProps): JSX.Element {
  const [selectedStars, setSelectedStars] = useState(0);

  const createArray = (length: number) => [...Array(length)];

  return (
    <div style={{ padding: '5px', ...style }} >
      { createArray(totalStars).map((n,i) => (
          <Star 
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)} />
      ))}
      <p>
        { selectedStars } of { totalStars } stars
      </p>
    </div>
  )
}