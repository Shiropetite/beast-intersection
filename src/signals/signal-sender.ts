/**
 * Define general behaviour of Signal Senders
 * Signal Senders raise a signal with informations (config) that will be received by the listeners
 * @T : Listerner type
 * @U : Config type
 */
export abstract class SignalSender<T, U> {
  
  private listeners: T[] = []; 

  /**
   * Send a signal for every listeners registers
   * @param config : informations to send
   */
  public abstract raise(config: U): void;

  /**
   * Register a new listener
   * @param listener : the listener to register
   */
  public register(listener: T): void { this.listeners.push(listener); }

  /**
   * Unregister a new listener
   * @param listener : the listener to remove
   */
  public unregister(listener: T): void { this.listeners = this.listeners.filter(l => l != listener); }

  /**
   * Get all listerners registers
   * @returns 
   */
  public getListeners(): T[] { return this.listeners; }

}
