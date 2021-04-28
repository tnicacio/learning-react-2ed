import { FaStar } from "react-icons/fa";

interface StarProps {
  selected?: boolean;
  onSelect: () => void;
}

export function Star({ selected = false, onSelect }: StarProps): JSX.Element {
  return (
    <FaStar 
      color={ selected ? 'red' : 'grey' } 
      onClick={ onSelect }/>
  )
 }