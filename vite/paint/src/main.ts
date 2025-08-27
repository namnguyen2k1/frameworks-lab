import { Paint } from "./paint";
import "./style.scss";
import { getMountedSize } from "./utils/get-mounted-size";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const { width, height } = getMountedSize({
  widthName: "--canvas-width",
  heightName: "--canvas-height",
});
canvas.width = width;
canvas.height = height;

const paint = new Paint(ctx, canvas);

canvas.addEventListener("mousedown", (e) => {
  paint.startDraw(e.offsetX, e.offsetY);
});
canvas.addEventListener("mousemove", (e) => {
  paint.drawing(e.offsetX, e.offsetY);
});
canvas.addEventListener("mouseup", (e) => {
  paint.endDraw(e.offsetX, e.offsetY);
});
canvas.addEventListener("mouseout", () => {
  if (paint.isDrawing) {
    paint.isDrawing = false;
    paint.pushUndo();
  }
});

const colorsBtn = document.querySelectorAll<HTMLDivElement>(".color");
const moreColorBtn = document.getElementById("more-color") as HTMLInputElement;
const toolsBtn = document.querySelectorAll<HTMLDivElement>(".draw");
const inputSizeBtn = document.getElementById("inputSize") as HTMLInputElement;
const fontSizeEl = document.querySelector(".fontSize") as HTMLDivElement;
fontSizeEl.innerHTML = `${paint.lineWidth}`;
const tutorialBtn = document.getElementById("tutorial") as HTMLButtonElement;
const clearBtn = document.getElementById("clear") as HTMLButtonElement;
const undoBtn = document.getElementById("undo") as HTMLButtonElement;
const downloadBtn = document.getElementById("download") as HTMLButtonElement;
const uploaderBtn = document.getElementById("uploader") as HTMLInputElement;
const colorPaintEl = document.querySelector(".colorPaint") as HTMLDivElement;
const bgColorEl = document.querySelector(".bgColor") as HTMLDivElement;

colorsBtn.forEach((el) => {
  const color = el.dataset.color!;
  el.addEventListener("click", () => {
    paint.changeColor(color);
    colorPaintEl.style.color = color;
  });
  el.addEventListener("dblclick", (e) => {
    paint.changeBackground(color);
    bgColorEl.style.color = color;
    paint.clearCanvas();
    e.stopPropagation();
    e.preventDefault();
  });
});

moreColorBtn.addEventListener("input", (e) => {
  const target = e.target as HTMLInputElement;
  paint.changeColor(target.value);
  colorPaintEl.style.color = target.value;
});

toolsBtn.forEach((el) => {
  el.addEventListener("click", () => {
    const tool = el.dataset.tool!;
    paint.changeTool(tool);
    toolsBtn.forEach((el) => {
      el.style.backgroundColor = "transparent";
      el.style.border = "none";
    });
    el.style.backgroundColor = "black";
    el.style.border = "2px solid #2d78ff";
  });
});

inputSizeBtn.addEventListener("input", (e) => {
  const width = parseInt((e.target as HTMLInputElement).value);
  fontSizeEl.innerText = `${width}`;
  paint.changeLineWidth(width);
});

tutorialBtn.addEventListener("click", () => {
  alert(
    "Tutorial:\n- Click color to change brush\n- Double-click color to change background\n- Select tool, adjust size, undo, clear, download",
  );
});

clearBtn.addEventListener("click", () => {
  paint.clearCanvas();
});

undoBtn.addEventListener("click", () => {
  paint.undo();
});

downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = canvas.toDataURL();
  link.download = "canvas.png";
  link.click();
});

uploaderBtn.addEventListener("change", (e) => {
  const file = (e.target as HTMLInputElement).files![0];
  if (!file) {
    return;
  }
  const img = new Image();
  const reader = new FileReader();
  reader.onload = () => {
    img.onload = () => {
      paint.drawImg(img);
    };
    img.src = reader.result as string;
  };
  reader.readAsDataURL(file);
});

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
    case "ArrowDown": {
      let width = parseInt(inputSizeBtn.value);
      if (e.code === "ArrowUp" && width < 30) {
        width++;
      } else if (e.code === "ArrowDown" && width > 1) {
        width--;
      }
      paint.changeLineWidth(width);
      inputSizeBtn.value = width + "";
      fontSizeEl.innerText = `${width}`;
      break;
    }
    case "KeyZ": {
      if (e.ctrlKey) {
        paint.undo();
      }
      break;
    }
  }
});
