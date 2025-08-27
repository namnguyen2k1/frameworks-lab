export function getMountedSize({
  widthName,
  heightName,
}: {
  widthName: string;
  heightName: string;
}) {
  const style = getComputedStyle(document.documentElement);
  const cssWidth = style.getPropertyValue(widthName);
  const cssHeight = style.getPropertyValue(heightName);

  const temp = document.createElement("div");
  temp.style.width = cssWidth.trim();
  temp.style.height = cssHeight.trim();
  document.body.appendChild(temp);

  const width = temp.offsetWidth;
  const height = temp.offsetHeight;
  document.body.removeChild(temp);

  return { width, height };
}
