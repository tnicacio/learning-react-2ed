import { useState } from 'react';
import { Star } from './Star';

interface StarRatingProps {
  style?: React.CSSProperties;
  totalStars?: number;
  selectedStars?: number;
  onRate?: (...f:any) => void;
}

export function StarRating({
  style = {} ,
  totalStars = 5,
  selectedStars = 0,
  onRate = f => f
}: StarRatingProps): JSX.Element {
  const createArray = (length: number) => [...Array(length)];

  return (
    <div style={{ padding: '5px', ...style }} >
      { createArray(totalStars).map((_,i) => (
          <Star 
            key={i}
            selected={selectedStars > i}
            onSelect={() => onRate(i+1)}
          />
      ))}
      <p>
        { selectedStars } of { totalStars } stars
      </p>
    </div>
  )
}