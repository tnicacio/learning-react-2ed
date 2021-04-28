import { FaTrash } from "react-icons/fa";
import { StarRating } from "../StarRating";

interface ColorProps {
  id: string;
  title: string;
  color: string;
  rating: number;
  onRemove?: (f:any) => void;
  onRate?: (id: string, rating: number) => void;
}

export function Color({
  id,
  title,
  color,
  rating,
  onRemove = f => f,
  onRate = f => f
}: ColorProps): JSX.Element {
  return(
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating 
        selectedStars={rating}
        onRate={rating => onRate(id, rating)}
      />
    </section>
  )
}