import React from 'react';

const Toolbar = ({ onShapeSelect, selectedShape }) => {
  const shapeButtons = [
    { shape: 'square', label: 'Square' },
    { shape: 'triangle', label: 'Triangle' },
    { shape: 'circle', label: 'Circle' },
    { shape: 'trapezoid', label: 'Trapezoid' },
    { shape: 'line', label: 'Line' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      {shapeButtons.map(({ shape, label }) => (
        <button
          key={shape}
          onClick={() => onShapeSelect(shape)}
          style={{
            margin: '0 5px',
            padding: '10px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: selectedShape === shape ? '#fff' : '#333',
            backgroundColor: selectedShape === shape ? '#007bff' : '#fff',
            border: 'none',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;