import { Color } from "./Color";

type Color = {
  id: string;
  title: string;
  color: string;
  rating: number;
}

interface ColorListProps {
  colors: Color[];
}

export function ColorList({ colors = [] }: ColorListProps) {
  if(!colors.length) {
    return <div>No Colors Listed.</div>;
  }
  return (
    <div>
      {
        colors.map(color => <Color key={color.id} {...color} />)
      }
    </div>
  );
}