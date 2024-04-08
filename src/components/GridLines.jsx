import React from 'react';
import { Line } from 'react-konva';

const GridLines = ({ stageRef, gridSize }) => {
  const renderGridLines = () => {
    const stage = stageRef.current;
    if (!stage) return null;
    const { width, height } = stage.getSize();
    const lines = [];

    for (let i = 0; i < width; i += gridSize) {
      lines.push(
        <Line key={`vertical-${i}`} points={[i, 0, i, height]} stroke="lightgray" strokeWidth={1} />
      );
    }

    for (let j = 0; j < height; j += gridSize) {
      lines.push(
        <Line key={`horizontal-${j}`} points={[0, j, width, j]} stroke="lightgray" strokeWidth={1} />
      );
    }

    return lines;
  };

  return renderGridLines();
};

export default GridLines;