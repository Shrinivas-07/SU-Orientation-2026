import React from "react";
import { Box, Cylinder } from "./Primitive";

export default function SoundSystem({ onSelect, selected }) {
  return (
    <group position={[25,0,-48]} onClick={(e)=>{e.stopPropagation(); onSelect({id:"sound-main",kind:"sound",title:"SOUND / CONTROL AREA",position:[25,3,-48],details:["Covered equipment zone","Stage audio controls","Black speaker cabinets","Keep clear during program"]});}}>
      <Box size={[10,7,6]} color={selected ? "#4dd7ff" : "#24262b"} position={[0,3.5,0]} />
      <Box size={[4,4,2]} color="#0d0f12" position={[0,2,-3.1]} />
      <Box size={[3,2,1.4]} color="#101215" position={[0,5,-3.1]} />
      <Cylinder args={[0.12,0.12,4,10]} color="#555" position={[0,5,0]} />
    </group>
  );
}