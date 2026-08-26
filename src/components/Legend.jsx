import React from "react";

const items=[
  ["🎤","Stage"],["🛋️","VIP sofa"],["🪑","General chair"],["❄️","Cooler"],
  ["🔊","Sound"],["💡","Tower light"],["🍴","Food stall"],["🚪","Entry / exit"]
];

export default function Legend(){
  return <div className="legend">
    <div className="legend-title">VENUE LEGEND</div>
    {items.map(([i,t])=><div className="legend-item" key={t}><span>{i}</span>{t}</div>)}
  </div>
}