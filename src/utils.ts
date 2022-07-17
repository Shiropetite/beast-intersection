import { ColliderEntity } from "./entities/ColliderEntity";
import { Direction, PersonEntity } from "./entities/persons/PersonEntity";
import { TriggerEntity } from './entities/TriggerEntity';

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
