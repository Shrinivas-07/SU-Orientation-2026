import React from "react";
import { OrbitControls, Sky, ContactShadows } from "@react-three/drei";
import { Ground, Box, Cylinder, Label } from "./Primitive";
import { VENUE, COLORS } from "../data/venue";
import Pandal from "./Pandal";
import Stage from "./Stage";
import Seat from "./Seat";
import Sofa from "./Sofa";
import Cooler from "./Cooler";
import SoundSystem from "./Sound";
import FoodCourt from "./FoodCourt";
import { controlsStore } from "./controlsStore";

function Carpet() {
  const w=VENUE.walkway.width;
  return (
    <group>
      <Box size={[w,0.08,VENUE.pandal.depth-8]} color={COLORS.carpet} position={[0,0.08,4]} />
      <Box size={[VENUE.stage.width,0.08,12]} color={COLORS.carpet} position={[0,0.08,-42]} />
    </group>
  );
}

function Registration({onSelect,selected}) {
  return <group position={[-32,0,52]} onClick={(e)=>{e.stopPropagation();onSelect({id:"registration",kind:"registration",title:"REGISTRATION DESK",position:[-32,2,52],details:["Front entry area","Help / registration counter","Near main entrance"]});}}>
    <Box size={[12,3,3]} color={selected?"#a855f7":"#6941a5"} position={[0,1.5,0]} />
    <Label position={[0,3.2,0]} size={1.1}>REGISTRATION</Label>
  </group>;
}

function Entry({onSelect}) {
  return <group position={[0,0,62]} onClick={(e)=>{e.stopPropagation();onSelect({id:"entry",kind:"entrance",title:"MAIN ENTRY / EXIT",position:[0,2,62],details:["Central front entry","Carpet walkway","Main public access"]});}}>
    <Box size={[12,0.35,4]} color="#b3262d" position={[0,0.2,0]} />
    <Label position={[0,0.6,0]} size={1.0}>ENTRY / EXIT</Label>
  </group>;
}

function FirstAid({onSelect}) {
  return <group position={[31,0,52]} onClick={(e)=>{e.stopPropagation();onSelect({id:"first-aid",kind:"first-aid",title:"FIRST AID",position:[31,2,52],details:["Emergency support point","Keep accessible","Near front exit"]});}}>
    <Box size={[7,2.5,3]} color="#d33b3b" position={[0,1.25,0]} />
    <Label position={[0,2.7,0]} size={1.0}>FIRST AID</Label>
  </group>;
}


function SectionMarker({ title, position, kind, onSelect }) {
  return (
    <group position={position}
      onClick={(e)=>{e.stopPropagation();onSelect({id:`section-${kind}`,kind,title,position,details:[`${title} overview`,"Camera POV for the complete section","Individual objects remain clickable"]});}}>
      <Label position={[0,3.1,0]} size={1.35} color="#ffffff">{title}</Label>
    </group>
  );
}

function GeneralSeating({selectedId,onSelect}) {
  const seats=[];
  const g=VENUE.general;
  const sideWidth=(g.seatsPerSide-1)*g.seatSpacing;
  for(let row=0;row<g.rows;row++){
    for(let col=0;col<g.seatsPerSide;col++){
      const xLeft=-VENUE.walkway.width/2-4-(sideWidth/2)+col*g.seatSpacing;
      const xRight=VENUE.walkway.width/2+4-(sideWidth/2)+col*g.seatSpacing;
      const z=g.firstRowZ+row*g.rowSpacing;
      seats.push(<Seat key={`L-${row}-${col}`} id={`L-${row+1}-${col+1}`} position={[xLeft,0,z]} selected={selectedId===`L-${row+1}-${col+1}`} onSelect={onSelect}/>);
      seats.push(<Seat key={`R-${row}-${col}`} id={`R-${row+1}-${col+1}`} position={[xRight,0,z]} selected={selectedId===`R-${row+1}-${col+1}`} onSelect={onSelect}/>);
    }
  }
  return <group>{seats}</group>;
}

function VIP({selectedId,onSelect}) {
  const out=[];
  const v=VENUE.vip;
  for(let side of [-1,1]){
    for(let r=0;r<v.rows;r++){
      for(let i=0;i<v.sofasPerSide;i++){
        const x=side*(VENUE.walkway.width/2+7+i*5);
        const z=v.zStart+r*v.zGap;
        const id=`${side<0?"L":"R"}-VIP-${r+1}-${i+1}`;
        out.push(<Sofa key={id} id={id} position={[x,0,z]} selected={selectedId===id} onSelect={onSelect}/>);
      }
    }
  }
  return <group>{out}</group>;
}

function Coolers({selectedId,onSelect}) {
  const c=VENUE.coolers;
  return <group>{[-1,1].flatMap(side=>Array.from({length:c.eachSide},(_,i)=>{
    const id=`${side<0?"LEFT":"RIGHT"}-COOLER-${i+1}`;
    const x=side*c.x;
    const z=c.zStart+i*c.zGap;
    return <Cooler key={id} id={id} position={[x,0,z]} selected={selectedId===id} onSelect={onSelect}/>;
  }))}</group>;
}

function TowerLights() {
  const xs=[-42,42];
  return <group>{xs.flatMap(x=>[-55,0,45].map((z,i)=>
    <group key={`${x}-${z}`} position={[x,0,z]}>
      <Box size={[0.7,16,0.7]} color="#70777d" position={[0,8,0]} />
      <Box size={[2.5,1.0,2.5]} color="#22262b" position={[0,14,0]} />
      <Cylinder args={[0.12,0.12,5,10]} color="#8e9499" position={[0,12,0]} />
    </group>
  ))}</group>;
}

export default function VenueScene({ selected, onSelect, onClear }) {
  return (
    <>
      <color attach="background" args={["#9fc3d5"]} />
      <Sky distance={450} sunPosition={[20,35,-20]} turbidity={7} rayleigh={1.8} />
      <ambientLight intensity={1.8} />
      <directionalLight castShadow intensity={2.2} position={[30,50,40]} shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <pointLight intensity={70} distance={150} position={[0,18,-40]} color="#ffd6a0" />

      <Ground width={190} depth={190} />
      <Pandal />
      <Carpet />
      <Stage onSelect={onSelect} selected={selected?.id==="main-stage"} />
      <VIP selectedId={selected?.id} onSelect={onSelect} />
      <SectionMarker title="GENERAL SEATING — LEFT" kind="general-left" position={[-30,0,0]} onSelect={onSelect}/>
      <SectionMarker title="GENERAL SEATING — RIGHT" kind="general-right" position={[30,0,0]} onSelect={onSelect}/>
      <SectionMarker title="VIP — LEFT" kind="vip-left" position={[-25,0,-29]} onSelect={onSelect}/>
      <SectionMarker title="VIP — RIGHT" kind="vip-right" position={[25,0,-29]} onSelect={onSelect}/>
      <GeneralSeating selectedId={selected?.id} onSelect={onSelect} />
      <Coolers selectedId={selected?.id} onSelect={onSelect} />
      <SoundSystem onSelect={onSelect} selected={selected?.id==="sound-main"} />
      <TowerLights />
      <Registration onSelect={onSelect} selected={selected?.id==="registration"} />
      <FirstAid onSelect={onSelect} />
      <Entry onSelect={onSelect} />
      <FoodCourt onSelect={onSelect} selectedId={selected?.id} />

      <ContactShadows position={[0,0,0]} opacity={0.35} scale={180} blur={2.5} far={20} />
      <OrbitControls ref={(r)=>{controlsStore.current=r}} makeDefault enableDamping dampingFactor={0.08} minDistance={12} maxDistance={210} target={[0,8,0]} />
    </>
  );
}