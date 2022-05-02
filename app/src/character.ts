export class Character {
  private readonly type: string;
  // geometry
  private readonly size: number;
  private top: number;
  private left: number;

  // constructor
  public constructor(type:string);
  public constructor(type: string, top: number, left: number);
  public constructor(...parameters: any[]) { 
    if(parameters.length === 1) {
      this.type = parameters[0];
      this.top = 0;
      this.left = 0;
    }

    if(parameters.length === 3) {
      this.type = parameters[0];
      this.top = parameters[1];
      this.left = parameters[2];
    }

    this.size = 42;
    this.create();
    this.update();
  }

  create(): void {
    const element = document.createElement('div');
    element.id = this.type;
    document.body.appendChild(element);
  }

  update(): void {
    const element = document.getElementById(this.type);
    
    element.style.top = `${this.top}px`;
    element.style.left = `${this.left}px`;
    element.style.width = `${this.size}px`;
    element.style.height = `${this.size}px`;
  }

  // getter & setter
  getTop(): number { return this.top; }
  setTop(top: number): void { this.top = top; }

  getLeft(): number { return this.left; }
  setLeft(left: number): void { this.left = left; }

}