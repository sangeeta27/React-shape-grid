# 🟦 Shape Grid App

**Interactive Canvas-Based Geometry Playground**  
(Click on any shape button to create, then drag/resize/rotate it on the grid.)

---

## 📌 Project Overview

An interactive web application built using **React** and **React Konva** that allows users to place, drag, resize, and rotate geometric shapes on a dynamic 2D grid. The app provides an intuitive canvas for experimenting with basic geometry and user-driven shape manipulation.

---

## 🎯 Objective

To build a **web-based prototype** that offers users a creative, interactive canvas for:
- Creating geometric shapes (square, triangle, circle, trapezoid, line)
- Placing them accurately on a 2D grid (X, Y plane)
- Interacting with shapes through dragging, resizing, rotating, and multi-selection

---

## ✅ Implemented Features

- **Dynamic 2D Grid**
  - Auto-scaling grid lines depending on zoom level
  - Clear separation of cells for accurate placement

- **Shape Placement**
  - Add shapes by selecting from toolbar and clicking on the grid
  - Supports: Square, Circle, Triangle, Trapezoid, Line

- **Shape Interaction**
  - 🟦 **Move**: Drag shapes freely across the grid  
  - 🔲 **Resize**: Scale shapes using transformer handles  
  - 🔁 **Rotate**: Rotate shapes around their center  
  - 🔘 **Select / Multi-select**: Highlight or manipulate one or multiple shapes simultaneously

- **Responsive UI**
  - Fully adaptable to different screen sizes and resolutions

- **Lazy Loading**
  - Grid lines are lazy-loaded for better performance using `React.lazy` and `Suspense`

---

## ⚙️ React Libraries Used

| Library | Purpose |
|--------|---------|
| `react` | Core UI framework |
| `react-konva` | Canvas rendering with React |
| `konva` | Underlying 2D canvas drawing engine |
| `react-dom` | Rendering React components |
| `react-scripts` | App build and dev tooling |
| `@babel/plugin-syntax-dynamic-import` | Lazy loading support for components |

### Components & Features
- `Stage`, `Layer`, `Transformer` — from **React Konva**  
- `Suspense`, `lazy` — for code splitting and lazy loading  
- `useRef`, `useEffect`, `useLayoutEffect` — React hooks for lifecycle and DOM control  

---

## 🧩 Tech Stack

- **Frontend**: React, React Konva, JavaScript (ES6+)
- **Canvas Engine**: Konva.js
- **Styling**: CSS (Responsive)

---

## 🚀 Future Enhancements (Ideas)

- Shape grouping and alignment tools
- Undo/redo functionality
- Export canvas as image or SVG
- Save/load projects from local storage
- Snap-to-grid and measurement tools

---

![Demo](./assets/demo.gif)
