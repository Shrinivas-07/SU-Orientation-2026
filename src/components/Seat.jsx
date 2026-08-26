import React from "react";
import { Box, Cylinder } from "./Primitive";
import { COLORS } from "../data/venue";

export default function Seat({ id, position, selected, onSelect }) {
  return (
    <group
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onSelect({
          id,
          kind: "chair",
          title: `GENERAL CHAIR ${id}`,
          position,
          details: [
            "General seating chair",
            "Click again or use Camera POV",
            "Selected chairs change colour",
          ],
        });
      }}
    >
      <Box
        size={[2.4, 0.18, 2.2]}
        color={selected ? COLORS.chairSelected : COLORS.chair}
        position={[0, 0.9, 0]}
      />
      <Box
        size={[2.25, 2, 0.16]}
        color={selected ? COLORS.chairSelected : COLORS.chair}
        position={[0, 2.0, 0.92]}
        rotation={[-0.08, 0, 0]}
      />
      <Box size={[0.18, 1.8, 0.18]} color="#a9a9a5" position={[-0.9, 0.75, 0]} />
      <Box size={[0.18, 1.8, 0.18]} color="#a9a9a5" position={[0.9, 0.75, 0]} />
      <Box size={[1.9, 0.12, 0.16]} color="#aaa" position={[0, 1.2, -0.1]} />
      <Cylinder args={[0.08, 0.08, 0.9, 10]} color="#aaa" position={[-0.85, 0.35, -0.7]} />
      <Cylinder args={[0.08, 0.08, 0.9, 10]} color="#aaa" position={[0.85, 0.35, -0.7]} />
    </group>
  );
}
