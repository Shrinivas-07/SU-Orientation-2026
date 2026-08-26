// Change dimensions/positions here when you get the real measurements.
// Units are FEET. Three.js uses the same numeric scale for convenience.

export const VENUE = {
  name: "University Induction / Orientation",
  pandal: {
    width: 96,
    depth: 128,
    roofHeight: 24,
    sideWallHeight: 6,
    frontClosed: false,
    backClosed: true,
  },
  stage: {
    width: 34,
    depth: 16,
    height: 4,
    z: -50,
  },
  vip: {
    rows: 2,
    sofasPerSide: 8,
    sofaWidth: 4.8,
    sofaDepth: 2.2,
    xGap: 4,
    zStart: -34,
    zGap: 5,
  },
  general: {
    rows: 18,
    seatsPerSide: 16,
    seatSpacing: 4.1,
    rowSpacing: 4.3,
    firstRowZ: -18,
  },
  walkway: {
    width: 10,
  },
  coolers: {
    eachSide: 5,
    x: 44,
    zStart: -43,
    zGap: 18,
    width: 3.2,
    depth: 3,
    height: 5,
  },
  foodCourt: {
    gapFromPandal: 18,
    x: 72,
    z: 6,
    stallCount: 9,
    stallWidth: 8,
    stallDepth: 5,
  },
  towers: {
    x: 19,
    z: -48,
    height: 14,
  }
};

export const COLORS = {
  grass: "#6f8d50",
  floor: "#4e5d4c",
  carpet: "#b3262d",
  stage: "#5f1720",
  stageTop: "#9e2431",
  chair: "#e7e1d5",
  chairSelected: "#19b5ff",
  sofa: "#b78d58",
  cooler: "#171b21",
  metal: "#8d949b",
  wall: "#d8d0bc",
  roof: "#a89f8b",
  food: "#e68a2e",
  foodRoof: "#f0b85c",
  accent: "#7dd3fc"
};