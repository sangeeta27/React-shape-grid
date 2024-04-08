import React, { useState, useRef, useLayoutEffect, useEffect, lazy, Suspense} from 'react';
import { Stage, Layer, Line, Transformer, Text } from 'react-konva';
import Square from './Square';
import Triangle from './Triangle';
import Circle from './Circle';
import Trapezoid from './Trapezoid';
import LinePath from './Line';
import Toolbar from './Toolbar';


const LazyGridLines = lazy(() => import('./GridLines'));

const ShapeComponent = ({ shape, isSelected, onSelect, onChange }) => {
  const shapeRef = useRef(null);
  const trRef = useRef(null);

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      {(() => {
        const shapeProps = {
          x: shape.x,
          y: shape.y,
          size: 50,
          draggable: isSelected,
          onClick: onSelect,
          onTap: onSelect,
          ref: shapeRef,
          strokeWidth: isSelected ? 2 : 1,
          stroke: isSelected ? 'red' : 'black',
          onDragEnd: (e) => {
            onChange({
              ...shape,
              x: e.target.x(),
              y: e.target.y(),
            });
          },
          onTransformEnd: (e) => {
            // transformer is changing scale of the node
            // and NOT its width or height
            // but in the store we have only width and height
            // to match the data better we will reset scale on transform end
            const node = shapeRef.current;
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();
            // we will reset it back
            node.scaleX(1);
            node.scaleY(1);
            onChange({
              ...shape,
              x: node.x(),
              y: node.y(),
              // set minimal value
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(node.height() * scaleY),
            });
          },
        };

        switch (shape.type) {
          case 'square':
            return <Square {...shapeProps} />;
          case 'triangle':
            return <Triangle {...shapeProps} />;
          case 'circle':
            return <Circle {...shapeProps} />;
          case 'trapezoid':
            return <Trapezoid {...shapeProps} />;
          case 'line':
            return <LinePath {...shapeProps} />;
          default:
            return null;
        }
      })()}
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};

const Grid = () => {
  const [shapes, setShapes] = useState([]);
  const [selectedShape, setSelectedShape] = useState(null);
  const [selectedShapeIndex, setSelectedShapeIndex] = useState(null);
  const stageRef = useRef(null);
  const gridLayerRef = useRef(null);
  const gridSize = 100;
  const shapeSize = 50;

  
  useLayoutEffect(() => {
    const stage = stageRef.current;
    const gridLayer = gridLayerRef.current; 

    console.log('before check');
    if (stage && gridLayer) {
      console.log('check');
      gridLayer.draw(); // Redraw the grid lines layer after the initial render
    }
  }, []);

  const handleShapeSelect = (shape) => {
    setSelectedShape(shape);
  };

  const handleStageClick = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectedShapeIndex(null);
    }
    if (selectedShape) {
      const stage = e.target.getStage();
      const { x, y } = stage.getPointerPosition();
      const gridX = Math.floor(x / gridSize) * gridSize + (gridSize - shapeSize) / 2;
      const gridY = Math.floor(y / gridSize) * gridSize + (gridSize - shapeSize) / 2;

      // Check if a shape already exists at the clicked grid cell
      const shapeAtCell = shapes.find((shape) => shape.x === gridX && shape.y === gridY);

      if (!shapeAtCell) {
        const newShape = {
          type: selectedShape,
          x: gridX,
          y: gridY,
        };
        setShapes([...shapes, newShape]);
      }
    }
  };

  const handleShapeClick = (index) => {
    setSelectedShapeIndex(index);
  };

  const handleShapeChange = (index, newAttrs) => {
    const updatedShapes = shapes.map((shape, i) => {
      if (i === index) {
        return { ...shape, ...newAttrs };
      }
      return shape;
    });
    setShapes(updatedShapes);
  };

  return (
    <div>
      <Toolbar onShapeSelect={handleShapeSelect} />
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={handleStageClick}
        onTap={handleStageClick}
      >
        <Layer ref={gridLayerRef}>
          <Suspense fallback={<Text text="Loading grid lines..." />}>
            <LazyGridLines stageRef={stageRef} gridSize={gridSize} />
          </Suspense>
        </Layer>
        <Layer>
          {shapes.map((shape, index) => (
            <ShapeComponent
              key={index}
              shape={shape}
              isSelected={selectedShapeIndex === index}
              onSelect={() => handleShapeClick(index)}
              onChange={(newAttrs) => handleShapeChange(index, newAttrs)}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Grid;