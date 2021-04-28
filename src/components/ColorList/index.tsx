import { Color } from "./Color";

type Color = {
  id: string;
  title: string;
  color: string;
  rating: number;
}

interface ColorListProps {
  colors: Color[];
  onRemoveColor?: (f:any) => any;
}

export function ColorList({ colors = [], onRemoveColor = f => f }: ColorListProps) {
  if(!colors.length) {
    return <div>No Colors Listed.</div>;
  }
  return (
    <div>
      {
        colors.map(color => <Color key={color.id} {...color} onRemove={onRemoveColor}/>)
      }
    </div>
  );
}