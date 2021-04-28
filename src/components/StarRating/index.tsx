import { FaStar } from 'react-icons/fa';
import { Star } from './Star';

export function StarRating({ totalStars = 5 }): JSX.Element {

  const createArray = (length: number) => [...Array(length)];

  return (
    <>
      { createArray(totalStars).map((n,i) => <Star key={i}/>) }
    </>
  )
}