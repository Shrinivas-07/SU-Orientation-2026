import React from "react";
import { Box } from "./Primitive";
import { COLORS, VENUE } from "../data/venue";

export default function Cooler({ id, position, selected, onSelect }) {
  const c=VENUE.coolers;
  return (
    <group position={position} onClick={(e)=>{e.stopPropagation(); onSelect({id,kind:"cooler",title:`BLACK COOLER ${id}`,position,details:["Approx. 5 ft high","3.2 ft × 3 ft footprint","10 coolers total","5 on each side"]});}}>
      <Box size={[c.width,c.height,c.depth]} color={selected ? "#27d3ff" : COLORS.cooler} position={[0,c.height/2,0]} />
      <Box size={[c.width*0.72,1.3,0.18]} color="#050608" position={[0,c.height*0.66,c.depth/2+0.12]} />
      {[0,1,2,3].map(i=><Box key={i} size={[c.width*0.65,0.12,0.15]} color="#60666c" position={[0,c.height*0.38+i*0.35,c.depth/2+0.2]} />)}
      <Box size={[0.22,c.height*0.65,0.2]} color="#d8dde2" position={[c.width/2-0.25,c.height*0.45,c.depth/2+0.22]} />
    </group>
  );
}