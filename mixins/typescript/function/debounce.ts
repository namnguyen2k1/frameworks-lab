export function debounce<F extends (...args: any[]) => any>(fn: F, delay: number): F {
  let timeout: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  } as F;
}

export const debounce2 = <T extends unknown[]>(callback: (...args: T) => void, delay: number) => {
  let timeoutTimer: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    clearTimeout(timeoutTimer);

    timeoutTimer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
