import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import VenueScene from "./components/VenueScene";
import { controlsStore } from "./components/controlsStore";
import InfoPanel from "./components/InfoPanel";
import Legend from "./components/Legend";

export default function App(){
  const [selected,setSelected]=useState(null);

  const cameraPOV=()=>{
    if(!selected || !controlsStore.current) return;
    const p=new Vector3(...selected.position);
    const camera=controlsStore.current.object;
    const offset=new Vector3(0,5,12);
    if(selected.kind==="stage") offset.set(0,8,25);
    if(selected.kind==="food") offset.set(0,4,11);
    if(selected.kind==="cooler") offset.set(5,4,8);
    if(selected.kind==="chair") offset.set(0,4,8);
    if(selected.kind==="vip") offset.set(0,4,9);
    if(selected.kind==="tower") offset.set(8,6,10);
    if(selected.kind?.startsWith("general")) offset.set(0,18,30);
    if(selected.kind?.startsWith("vip")) offset.set(0,10,22);
    const target=p.clone().add(new Vector3(0,1.8,0));
    const destination=p.clone().add(offset);
    // Simple smooth flight using the browser animation loop.
    const start=camera.position.clone();
    const startTarget=controlsStore.current.target.clone();
    const t0=performance.now();
    const duration=900;
    const tick=(now)=>{
      const t=Math.min(1,(now-t0)/duration);
      const e=t<0.5 ? 2*t*t : 1-Math.pow(-2*t+2,2)/2;
      camera.position.lerpVectors(start,destination,e);
      controlsStore.current.target.lerpVectors(startTarget,target,e);
      controlsStore.current.update();
      if(t<1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const resetView=()=>{
    setSelected(null);
    if(!controlsStore.current) return;
    const camera=controlsStore.current.object;
    camera.position.set(105,78,105);
    controlsStore.current.target.set(0,7,0);
    controlsStore.current.update();
  };

  return (
    <div className="app">
      <header className="topbar">
        <div>
          <div className="brand">UNIVERSITY INDUCTION</div>
          <div className="subtitle">Interactive 3D Venue Map</div>
        </div>
        <div className="top-actions">
          <button onClick={resetView}>Reset overview</button>
        </div>
      </header>

      <main className="workspace">
        <div className="canvas-wrap">
          <Canvas
            shadows
            camera={{position:[105,78,105],fov:42,near:0.1,far:500}}
            onPointerMissed={()=>setSelected(null)}
          >
            <VenueScene
              selected={selected}
              onSelect={setSelected}
              onClear={()=>setSelected(null)}
            />
          </Canvas>

          <div className="canvas-label">
            <span>3D OVERVIEW</span>
            <small>Drag = rotate · Wheel/pinch = zoom · Click = select</small>
          </div>
        </div>

        <aside className="sidebar">
          <InfoPanel selected={selected} onCamera={cameraPOV}/>
          <Legend/>
          <div className="spec-card">
            <div className="legend-title">CURRENT BASE DATA</div>
            <div><b>Stage</b><span>34 × 16 ft</span></div>
            <div><b>General chairs</b><span>576 generated</span></div>
            <div><b>VIP sofas</b><span>32 generated</span></div>
            <div><b>Coolers</b><span>10 (5 + 5)</span></div>
            <div><b>Food stalls</b><span>11 in C layout</span></div>
          </div>
        </aside>
      </main>
    </div>
  );
}

