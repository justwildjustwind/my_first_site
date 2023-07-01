import * as Zdog from "https://cdn.skypack.dev/zdog@1.1.3";

const spin = { value: true, side: false, limit: 0.65 };

const illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  onDragStart: () => (spin.value = false),
  onDragEnd: () => (spin.value = true),
  rotate: { x: -Zdog.TAU / 24 }
});

const toast = new Zdog.Shape({
  addTo: illo,
  path: [
    { x: -60, y: -55 },
    { x: 0, y: -45 },
    { x: 60, y: -55 },
    { x: 55, y: 10 },
    { x: 60, y: 55 },
    { x: 0, y: 53 },
    { x: -60, y: 55 },
    { x: -50, y: -10 }
  ],
  fill: true,
  stroke: 20,
  color: "#f39949"
});

const faceGroup = new Zdog.Group({
  addTo: illo,
  translate: { z: 5 }
});

const face = new Zdog.Shape({
  addTo: faceGroup,
  path: [
    { x: -56, y: 0 },
    {
      bezier: [
        { x: -20, y: 0 },
        { x: -20, y: -10 },
        { x: 0, y: -10 }
      ]
    },
    {
      bezier: [
        { x: 20, y: -10 },
        { x: 20, y: 0 },
        { x: 60, y: 0 }
      ]
    },
    { x: 58, y: 10 },
    { x: 63, y: 57 },
    { x: 0, y: 55 },
    { x: -63, y: 57 }
  ],
  fill: true,
  stroke: 5,
  color: "#dfd785"
});

const ear = new Zdog.Shape({
  addTo: faceGroup,
  path: [
    { x: 0, y: -10 },
    { x: 10, y: 8 },
    { x: -13, y: 10 }
  ],
  fill: true,
  translate: { y: -48, x: -55 },
  rotate: { z: -Zdog.TAU / 8 },
  stroke: 5,
  color: "#dfd785"
});

ear.copy({
  translate: { y: -48, x: 55 },
  rotate: { z: Zdog.TAU / 8 }
});

const eye = new Zdog.Shape({
  addTo: faceGroup,
  path: [
    { x: -2, y: 0 },
    { x: 2, y: 0 }
  ],
  translate: { y: 5, x: -20 },
  stroke: 10,
  color: "#202215"
});

eye.copy({ translate: { y: 5, x: 20 } });

const brow = new Zdog.Shape({
  addTo: faceGroup,
  path: [
    { x: -2, y: 0 },
    { x: 2, y: 0 }
  ],
  rotate: { z: Zdog.TAU / 24 },
  translate: { y: -15, x: -20 },
  stroke: 8,
  color: "#dfd785"
});

brow.copy({ translate: { y: -15, x: 20 }, rotate: { z: -Zdog.TAU / 24 } });

new Zdog.Shape({
  addTo: faceGroup,
  path: [
    { x: -10, y: 10 },
    {
      bezier: [
        { x: -5, y: 10 },
        { x: 0, y: 10 },
        { x: 0, y: 3 }
      ]
    },
    {
      bezier: [
        { x: 0, y: 10 },
        { x: 5, y: 10 },
        { x: 10, y: 10 }
      ]
    }
  ],
  translate: { y: 7 },
  closed: false,
  stroke: 8,
  color: "#202215"
});

const animate = () => {
  if (spin.value) {
    spin.side ? (illo.rotate.y += 0.01) : (illo.rotate.y -= 0.01);
    Math.abs(illo.rotate.y) > spin.limit && (spin.side = !spin.side);
  }

  illo.updateRenderGraph();
  requestAnimationFrame(animate);
};

animate();
