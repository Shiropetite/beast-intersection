import { Direction, PersonEntity, ColliderEntity } from "./entities";

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

export enum SpriteDirections {
  UP='up',
  LEFT='left',
  RIGHT='right',
  DOWN='down',
}

export const box = 64 * 2;

export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const lookAt = (looker: PersonEntity, target: ColliderEntity, move = false) => {
  // looker is above target position
  if (looker.getColliderTop() < (target.getColliderTop())) {
    if (move) looker.setColliderTop(looker.getColliderTop() + box);
    looker.setDirection(Direction.DOWN);
    looker.update();
  }
  else 
  // looker is below target position
  if (looker.getColliderTop() > (target.getColliderTop())) {
    if (move) looker.setColliderTop(looker.getColliderTop() - box);
    looker.setDirection(Direction.UP);
    looker.update();
  } 
  else 
  // looker is left of target position
  if (looker.getColliderLeft() < (target.getColliderLeft())) {
    if (move) looker.setColliderLeft(looker.getColliderLeft() + box);
    looker.setDirection(Direction.RIGHT);
    looker.update();
  }
  else 
  // looker is right of target position
  if (looker.getColliderLeft() > (target.getColliderLeft())) {
    if (move) looker.setColliderLeft(looker.getColliderLeft() - box);
    looker.setDirection(Direction.LEFT);
    looker.update();
  }
}
