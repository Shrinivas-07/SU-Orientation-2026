import React from "react";
import { Box, Cylinder, Label } from "./Primitive";
import { COLORS, VENUE } from "../data/venue";

function Stair({ side }) {
  const x = side === "left" ? -VENUE.stage.width/2 - 2.5 : VENUE.stage.width/2 + 2.5;
  return (
    <group position={[x,0,-50]}>
      {[0,1,2,3].map(i => (
        <Box key={i} size={[4.2,0.65*(i+1),2.5]} color="#6e2630" position={[0,0.32*(i+1),-i*0.8]} />
      ))}
    </group>
  );
}

export default function Stage({ onSelect, selected }) {
  const s=VENUE.stage;
  return (
    <group>
      <group onClick={(e)=>{e.stopPropagation(); onSelect({id:"main-stage",kind:"stage",title:"MAIN STAGE",position:[0,4,s.z],details:["34 ft × 16 ft","4 ft platform","Stage stairs on both sides","Backdrop and truss lighting"]});}}>
        <Box size={[s.width,1.2,s.depth]} color={selected ? "#ff5d68" : COLORS.stage} position={[0,0.6,s.z]} />
        <Box size={[s.width-2,0.35,s.depth-1.5]} color={selected ? "#ff7a83" : COLORS.stageTop} position={[0,1.35,s.z]} />
        <Box size={[s.width,0.5,0.6]} color="#201b1d" position={[0,1.65,s.z-s.depth/2+0.3]} />
        <Label position={[0,2.0,s.z]} size={2.1}>MAIN STAGE</Label>
        <Label position={[0,0.08,s.z+s.depth/2+1.5]} size={1.2} color="#ffd166">34 ft × 16 ft</Label>
      </group>
      <Stair side="left" />
      <Stair side="right" />

      {/* Performer-facing monitor speakers */}
      {[-11,-5,5,11].map((x,i)=>(
        <Box key={i} size={[2.2,1.8,1.2]} color="#11151a" position={[x,2.15,s.z+5.7]} rotation={[-0.15,0,0]} />
      ))}

      {/* Audience-facing speaker towers on both sides */}
      {[-21,21].map((x,i)=>(
        <group key={i} position={[x,0,-48]}>
          <Box size={[2.8,13,2.8]} color="#121418" position={[0,6.5,0]} />
          <Box size={[3.4,4.2,3.2]} color="#20242a" position={[0,13.0,0]} />
          <Box size={[2.4,2.4,0.8]} color="#0b0d10" position={[0,15.1,0]} />
        </group>
      ))}
    </group>
  );
}