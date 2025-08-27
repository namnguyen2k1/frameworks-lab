import { drawBrushStroke } from "./draw-brush-stroke";

export class Paint {
  tool: string = "pen";
  color: string = "black";
  bgColor: string = "white";
  lineWidth: number = 5;
  isDrawing: boolean = false;
  startX: number = 0;
  startY: number = 0;
  undoStack: ImageData[] = [];
  undoIndex: number = -1;

  constructor(
    private readonly ctx: CanvasRenderingContext2D,
    private readonly canvas: HTMLCanvasElement,
  ) {
    this.clearCanvas();
  }

  clearCanvas() {
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.undoStack = [];
    this.undoIndex = -1;
  }

  private snapshot() {
    return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
  }

  pushUndo() {
    const snap: ImageData = this.snapshot();
    this.undoStack = this.undoStack.slice(0, this.undoIndex + 1);
    this.undoStack.push(snap);
    this.undoIndex++;
  }

  undo() {
    if (this.undoIndex < 0) {
      this.clearCanvas();
    } else {
      this.undoIndex--;
      if (this.undoIndex >= 0) {
        this.ctx.putImageData(this.undoStack[this.undoIndex], 0, 0);
      } else {
        this.clearCanvas();
      }
    }
  }

  changeTool(tool: string) {
    this.tool = tool;
  }

  changeColor(color: string) {
    this.color = color;
  }

  changeBackground(color: string) {
    this.bgColor = color;
    this.clearCanvas();
  }

  changeLineWidth(width: number) {
    this.lineWidth = width;
  }

  startDraw(x: number, y: number) {
    this.isDrawing = true;
    this.startX = x;
    this.startY = y;

    if (this.tool === "pen") {
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
    }
  }

  drawImg(image: CanvasImageSource) {
    this.ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
  }

  drawing(x: number, y: number) {
    if (!this.isDrawing) return;

    if (this.tool === "pen") {
      // this.ctx.strokeStyle = this.color;
      // this.ctx.lineWidth = this.lineWidth;
      // this.ctx.lineTo(x, y);
      // this.ctx.stroke();
      // this.ctx.beginPath();
      // this.ctx.moveTo(x, y);

      drawBrushStroke(
        this.ctx,
        [this.startX, this.startY],
        [x, y],
        this.color,
        this.lineWidth,
        // ...
      );
      this.startX = x;
      this.startY = y;
    }
  }

  endDraw(x: number, y: number) {
    if (!this.isDrawing) return;

    switch (this.tool) {
      case "line":
        this.drawLine(this.startX, this.startY, x, y);
        break;
      case "rectangle":
        this.drawRectangle(this.startX, this.startY, x, y);
        break;
      case "circle":
        this.drawCircle(this.startX, this.startY, x, y);
        break;
    }

    this.isDrawing = false;
    this.pushUndo();
  }

  private drawLine(x1: number, y1: number, x2: number, y2: number) {
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
  }

  private drawRectangle(x1: number, y1: number, x2: number, y2: number) {
    const x = Math.min(x1, x2);
    const y = Math.min(y1, y2);
    const width = Math.abs(x2 - x1);
    const height = Math.abs(y2 - y1);

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(x, y, width, height);
    this.ctx.strokeRect(x, y, width, height);
  }

  private drawCircle(x1: number, y1: number, x2: number, y2: number) {
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    const radius = Math.hypot(x2 - x1, y2 - y1) / 2;

    this.ctx.beginPath();
    this.ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.stroke();
  }
}
