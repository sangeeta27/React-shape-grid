import React from 'react';
import { Shape } from 'react-konva';

const Triangle = React.forwardRef(({ x, y, size, onClick, onTap, ...rest }, ref) => {
  return (
    <Shape
      ref={ref}
      sceneFunc={(context, shape) => {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + size / 2, y - size);
        context.lineTo(x + size, y);
        context.closePath();
        context.fillStrokeShape(shape);
      }}
      fill="green"
      onClick={onClick}
      onTap={onTap}
      {...rest}
    />
  );
});

export default Triangle;