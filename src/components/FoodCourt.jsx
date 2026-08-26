import React from "react";
import { Box, Cylinder, Label } from "./Primitive";

function Shopkeeper() {
  return (
    <group position={[0, 2.1, -1.0]}>
      <Cylinder args={[0.42, 0.42, 1.2, 16]} color="#d39a72" position={[0, 1.6, 0]} />
      <Cylinder args={[0.55, 0.75, 1.7, 16]} color="#f3f0e8" position={[0, 0.45, 0]} />
      <Cylinder args={[0.22, 0.22, 1.3, 12]} color="#d39a72" position={[-0.72, 0.6, 0]} rotation={[0, 0, -0.25]} />
      <Cylinder args={[0.22, 0.22, 1.3, 12]} color="#d39a72" position={[0.72, 0.6, 0]} rotation={[0, 0, 0.25]} />
      <Box size={[0.8, 0.15, 0.8]} color="#343434" position={[0, 2.15, 0]} />
    </group>
  );
}

function Stall({ index, position, rotation, selected, onSelect }) {
  return (
    <group
      position={position}
      rotation={rotation}
      onClick={(e) => {
        e.stopPropagation();
        onSelect({
          id: `stall-${index}`,
          kind: "food",
          title: `FOOD STALL ${index}`,
          position,
          details: [
            "Individual food counter",
            "Shopkeeper / preparation area",
            "Food court layout",
            "Camera POV available",
          ],
        });
      }}
    >
      <Box size={[8, 0.35, 5]} color={selected ? "#31d5ff" : "#5f4a35"} position={[0, 0.2, 0]} />
      <Box size={[8, 3.2, 0.45]} color={selected ? "#ffcf6a" : "#f4a340"} position={[0, 2.0, -2.0]} />
      <Box size={[8, 0.35, 5]} color="#d88428" position={[0, 4.0, 0]} />
      <Box size={[0.35, 3.8, 0.35]} color="#8a5c32" position={[-3.7, 2, 0]} />
      <Box size={[0.35, 3.8, 0.35]} color="#8a5c32" position={[3.7, 2, 0]} />
      <Box size={[7.2, 0.75, 1.2]} color="#8c5128" position={[0, 1.0, -2.55]} />
      <Shopkeeper />
      <Label position={[0, 4.8, 0]} size={1.0}>
        STALL {index}
      </Label>
    </group>
  );
}

export default function FoodCourt({ onSelect, selectedId }) {
  const stalls = [];

  // 5 stalls in one straight line facing forward
  for (let i = 0; i < 5; i++) {
    stalls.push({
      position: [i * 10 - 20, 0, 0], // spread along x-axis
      rotation: [0, 0, 0],           // facing forward
    });
  }

  // 2 stalls forming C-shape, facing each other
  stalls.push({
    position: [-25, 1, 7],          // left side
    rotation: [0, Math.PI / 2, 0],   // rotated inward
  });
  stalls.push({
    position: [25, 1, 7],           // right side
    rotation: [0, -Math.PI / 2, 0],  // rotated inward
  });

  return (
    // Shift the entire food court to the right side of pandal with ~5 feet distance
    // and rotate clockwise (e.g., 30 degrees)
    <group position={[90, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
      <Label position={[0, 0.2, -15]} size={2.0} color="#ffe3a1">
        FOOD COURT — 7 STALLS
      </Label>
      {stalls.map((s, i) => (
        <Stall
          key={i}
          index={i + 1}
          position={s.position}
          rotation={s.rotation}
          selected={selectedId === `stall-${i + 1}`}
          onSelect={onSelect}
        />
      ))}
    </group>
  );
}
