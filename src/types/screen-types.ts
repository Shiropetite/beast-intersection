export type Field = {
  name: string,
  type: FieldType
}

export enum FieldType {
  KEY,
  SLIDER,
  REDIRECT
}
