export class Item {

    // sprite
    private readonly name: string
    // desc

    constructor(name: string) { this.name = name; }

    public getName(): string { return this.name; }
  
}