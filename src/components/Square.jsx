import React from 'react';
import { Rect } from 'react-konva';

const Square = React.forwardRef(({ x, y, size, onClick, onTap, ...rest }, ref) => {
  return (
    <Rect
      ref={ref}
      x={x}
      y={y}
      width={size}
      height={size}
      fill="red"
      onClick={onClick}
      onTap={onTap}
      {...rest}
    />
  );
});

export default Square;