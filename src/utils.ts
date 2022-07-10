export const box = 64 * 2;

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}