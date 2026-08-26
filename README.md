# Induction / Orientation — Interactive 3D Venue Map

Frontend-only React + Three.js/React Three Fiber project.

## Run

```bash
npm install
npm run dev
```

Open the URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## What is included

- Roofed pandal with a closed back/stage wall
- Side walls closed above 6 ft, lower side openings left open
- Stage with side stairs only
- Performer-facing stage monitor speakers
- Audience-facing speaker towers
- Three sets of tower-light structures
- 10 black coolers, 5 per side
- VIP sofas on both sides
- Generated general seating
- Central red carpet
- Registration and first aid
- Separate C-shaped food court
- Clickable chairs, sofas, stage, coolers, sound area and food stalls
- Selection colour change
- Camera POV button with smooth camera movement
- No booking/availability/backend

## Where to edit real measurements

Edit:

`src/data/venue.js`

The application intentionally keeps the venue dimensions and counts in one place.

## Notes

The geometry is procedural. No Blender or 3D modelling software is required.
For a production deployment, replace simple procedural objects with optimized GLB assets only if you later want higher visual realism.
