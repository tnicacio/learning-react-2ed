import { FaStar } from "react-icons/fa";

interface StarProps {
  selected?: boolean;
}

export function Star({ selected = false }: StarProps): JSX.Element {
  return (
    <FaStar color={selected ? 'red' : 'grey'} />
  )
 }