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
  public registerListener(listener: T): void { this.listeners.push(listener); }

  /**
   * Get all listerners registers
   * @returns 
   */
  public getListerners(): T[] { return this.listeners; }

}
