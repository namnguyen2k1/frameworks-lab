export function varCSS(name: string, value: string | null = null): string {
  const cssVarName = name.startsWith("--") ? name : `--${name}`;

  if (value !== null) {
    document.documentElement.style.setProperty(cssVarName, value);
  }

  return getComputedStyle(document.documentElement).getPropertyValue(cssVarName).trim();
}
