import React from 'react';
import { Circle as KonvaCircle } from 'react-konva';

const Circle = React.forwardRef(({ x, y, size, onClick, onTap, ...rest }, ref) => {
  return (
    <KonvaCircle
      ref={ref}
      x={x}
      y={y}
      radius={size / 2}
      fill="blue"
      onClick={onClick}
      onTap={onTap}
      {...rest}
    />
  );
});

export default Circle;