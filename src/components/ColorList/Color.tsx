import { StarRating } from "../StarRating";

interface ColorProps {
  title: string;
  color: string;
  rating: number;
}

export function Color( { title, color, rating }: ColorProps): JSX.Element {
  return(
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} />
    </section>
  )
}