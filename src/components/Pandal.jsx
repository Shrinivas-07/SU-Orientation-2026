import React from "react";
import { Box } from "./Primitive";
import { COLORS, VENUE } from "../data/venue";
export default function Pandal() {
  const p=VENUE.pandal;
  const zFront=p.depth/2;
  const zBack=-p.depth/2;
  return (
    <group>
      {/* roof */}
      <Box size={[p.width,0.7,p.depth]} color={COLORS.roof} position={[0,p.roofHeight,0]} />
      {/* back wall behind stage */}
      <Box size={[p.width, p.roofHeight, 0.5]} color={COLORS.wall} position={[0,p.roofHeight/2,zBack]} />
      {/* side walls: only upper 6 ft is closed; lower area remains open */}
      <Box size={[0.5,p.roofHeight-p.sideWallHeight,p.depth]} color={COLORS.wall} position={[-p.width/2,(p.roofHeight+p.sideWallHeight)/2,0]} />
      <Box size={[0.5,p.roofHeight-p.sideWallHeight,p.depth]} color={COLORS.wall} position={[p.width/2,(p.roofHeight+p.sideWallHeight)/2,0]} />
      {/* front remains open; only a low entry threshold/curtain edge */}
      <Box size={[36,0.6,0.5]} color="#6c4a42" position={[0,0.3,zFront]} />
      {/* roof support posts */}
      {[-46,46].flatMap(x=>[-58,0,58].map(z=>(
        <Box key={`${x}-${z}`} size={[0.5,p.roofHeight,0.5]} color="#73766f" position={[x,p.roofHeight/2,z]} />
      )))}
    </group>
  );
}