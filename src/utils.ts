export type Key = ActionKeys | DirectionKeys;

export enum ActionKeys {
  PAUSE='p',
  ACT='e',
  INVENTORY='i',
}

export enum DirectionKeys {
  UP='z',
  LEFT='q',
  RIGHT='d',
  DOWN='s',
}

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}