import React from 'react';
import { Shape } from 'react-konva';

const Trapezoid = React.forwardRef(({ x, y, size, onClick, onTap, ...rest }, ref) => {
  return (
    <Shape
      ref={ref}
      sceneFunc={(context, shape) => {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + size / 2, y - size / 2);
        context.lineTo(x + size, y);
        context.lineTo(x + size / 2, y + size / 2);
        context.closePath();
        context.fillStrokeShape(shape);
      }}
      fill="yellow"
      onClick={onClick}
      onTap={onTap}
      {...rest}
    />
  );
});

export default Trapezoid;