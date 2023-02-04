export interface KeydownSignalListener {
  onKeydown(key: string): boolean;
}

export interface KeypressSignalListener {
  onKeyPressed(key: string): boolean;
}

export type KeypressSignalConfig = {
  key: string
}

export interface KeyupSignalListener {
  onKeyup(key: string): boolean;
}

export type KeyupSignalConfig = {
  key: string
}
