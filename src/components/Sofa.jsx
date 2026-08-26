import React from "react";
import { Box } from "./Primitive";
import { COLORS } from "../data/venue";

export default function Sofa({ id, position, selected, onSelect }) {
  return (
    <group position={position} onClick={(e)=>{e.stopPropagation(); onSelect({id,kind:"vip",title:`VIP SOFA ${id}`,position,details:["VIP seating", "Front section", "Click to highlight", "Camera POV available"]});}}>
      <Box size={[4.5,1.0,2.1]} color={selected ? "#ffd166" : COLORS.sofa} position={[0,0.55,0]} />
      <Box size={[4.35,2.0,0.5]} color={selected ? "#ffd166" : COLORS.sofa} position={[0,1.7,0.78]} />
      <Box size={[0.5,1.4,2.0]} color={selected ? "#ffd166" : COLORS.sofa} position={[-2.0,1.0,0]} />
      <Box size={[0.5,1.4,2.0]} color={selected ? "#ffd166" : COLORS.sofa} position={[2.0,1.0,0]} />
    </group>
  );
}