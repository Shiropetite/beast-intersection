/**
 * Raises a signal containing a config that will be received by the signal listeners
 * @T : Listener type
 * @U : Config type
 */
export abstract class SignalSender<T, U> {
  
  private listeners: T[] = []; 

  /**
   * Sends a signal to every registered signal listeners
   * @param config : signal content
   */
  public abstract raise(config: U): void;

  /**
   * Registers a signal listener
   * @param listener
   */
  public register(listener: T): void { this.listeners.push(listener); }

  /**
   * Unregisters a signal listener
   * @param listener
   */
  public unregister(listener: T): void { this.listeners = this.listeners.filter(l => l != listener); }

  /**
   * @returns all registered signal listeners
   */
  public getListeners(): T[] { return this.listeners; }
}
