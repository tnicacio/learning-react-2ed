import { Color } from "./Color";

type ColorProps = {
  id: string;
  title: string;
  color: string;
  rating: number;
}

interface ColorListProps {
  colors: ColorProps[];
  onRemoveColor?: (f:any) => any;
  onRateColor?: (...f:any) => any;
}

export function ColorList({
  colors = [],
  onRemoveColor = f => f,
  onRateColor = f => f
}: ColorListProps) {
  if(!colors.length) {
    return <div>No Colors Listed. (Add a Color)</div>;
  }
  return (
    <div className="color-list">
      {
        colors.map(colorItem => (
        <Color 
          key={colorItem.id}
          {...colorItem}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
        ))
      }
    </div>
  );
}