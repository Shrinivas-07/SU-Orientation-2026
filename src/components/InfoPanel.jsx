import React from "react";

export default function InfoPanel({selected,onCamera}) {
  if(!selected) return (
    <div className="info-panel empty">
      <div className="info-icon">⌖</div>
      <h2>Explore the venue</h2>
      <p>Click a chair, sofa, stage, cooler, food stall, tower or facility.</p>
      <p className="muted">Selected objects highlight. Then use <b>Look from camera POV</b>.</p>
    </div>
  );

  return (
    <div className="info-panel">
      <div className="eyebrow">{selected.kind?.toUpperCase()}</div>
      <h2>{selected.title}</h2>
      <ul>{(selected.details||[]).map((d,i)=><li key={i}>{d}</li>)}</ul>
      <button className="camera-btn" onClick={onCamera}>◉ Look from camera POV</button>
      <div className="hint">Use mouse/touch to orbit after the camera arrives.</div>
    </div>
  );
}