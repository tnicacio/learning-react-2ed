import { FaTrash } from "react-icons/fa";
import { StarRating } from "../StarRating";

interface ColorProps {
  id: string;
  title: string;
  color: string;
  rating: number;
  onRemove?: (f:any) => any;
}

export function Color( { id, title, color, rating, onRemove = f => f }: ColorProps): JSX.Element {
  return(
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} />
    </section>
  )
}