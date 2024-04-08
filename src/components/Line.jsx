import React from 'react';
import { Line } from 'react-konva';

const LinePath = React.forwardRef(({ x, y, size, onClick, onTap, ...rest }, ref) => {
  return (
    <Line
      ref={ref}
      points={[x, y, x + size, y + size]}
      stroke="black"
      strokeWidth={2}
      onClick={onClick}
      onTap={onTap}
      {...rest}
    />
  );
});

export default LinePath;