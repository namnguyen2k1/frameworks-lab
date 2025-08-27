import tinycolor from "tinycolor2";

export function drawBrushStroke(
  ctx: CanvasRenderingContext2D,
  from: [number, number],
  to: [number, number],
  baseColour: string,
  strokeWidth: number,
) {
  const varyBrightness = 5;
  const varyColour = (src: string) => {
    const c = tinycolor(src);
    const amount = Math.round(Math.random() * 2 * varyBrightness);
    return (
      amount > varyBrightness ? c.brighten(amount - varyBrightness) : c.darken(amount)
    ).toHexString();
  };

  const makeBrush = (size: number, colour: string) => {
    const bristles: {
      distance: number;
      thickness: number;
      colour: string;
    }[] = [];
    const count = Math.round(size / 3);
    const gap = size / count;

    for (let i = 0; i < count; i++) {
      const distance = i === 0 ? 0 : gap * i + (Math.random() * gap) / 2 - gap / 2;
      bristles.push({
        distance,
        thickness: Math.random() * 2 + 2,
        colour: varyColour(colour),
      });
    }
    return bristles;
  };

  const rotatePoint = (dist: number, angle: number, origin: [number, number]): [number, number] => [
    origin[0] + dist * Math.cos(angle),
    origin[1] + dist * Math.sin(angle),
  ];

  const getBearing = (a: [number, number], b: [number, number]) =>
    (Math.atan2(b[1] - a[1], b[0] - a[0]) - Math.PI / 2 + Math.PI * 2) % (Math.PI * 2);

  const getNewAngle = (a: [number, number], b: [number, number], oldAngle?: number) => {
    const bearing = getBearing(a, b);
    if (!oldAngle) return bearing;
    const diff = ((oldAngle - bearing + Math.PI) % (Math.PI * 2)) - Math.PI;
    return oldAngle - (diff < -Math.PI ? diff + Math.PI * 2 : diff);
  };

  const strokeBristle = (
    a: [number, number],
    b: [number, number],
    bristle: { distance: number; thickness: number; colour: string },
    ctrl: [number, number],
  ) => {
    ctx.beginPath();
    ctx.moveTo(a[0], a[1]);
    ctx.strokeStyle = bristle.colour;
    ctx.lineWidth = bristle.thickness;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.shadowColor = bristle.colour;
    ctx.shadowBlur = bristle.thickness / 2;
    ctx.quadraticCurveTo(ctrl[0], ctrl[1], b[0], b[1]);
    ctx.stroke();
  };

  const brush = makeBrush(strokeWidth, baseColour);
  const oldAngle = getBearing(from, to);
  const newAngle = getNewAngle(from, to, oldAngle);

  brush.forEach((bristle) => {
    const origin = rotatePoint(bristle.distance - strokeWidth / 2, oldAngle, from);
    const dest = rotatePoint(bristle.distance - strokeWidth / 2, newAngle, to);
    const ctrl = rotatePoint(bristle.distance - strokeWidth / 2, newAngle, from);
    strokeBristle(origin, dest, bristle, ctrl);
  });
}
