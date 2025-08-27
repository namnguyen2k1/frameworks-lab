export function delay(ms: number = 200) {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });
}
