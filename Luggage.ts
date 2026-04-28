import { Priority } from "./Priority.js";

export abstract class Luggage {
  protected readonly fee: number = 5.20;

  constructor(
    protected weight: number,
    protected description: string,
    protected priority: Priority
  ) {}

  public getWeight(): number { return this.weight; }
  public setWeight(weight: number): void { this.weight = weight; }
  public getDescription(): string { return this.description; }
  public getPriority(): Priority { return this.priority; }

  public abstract getPrice(): number;
  public abstract getInsuranceValue(): number;
  
  public setInsuranceValue(value: number): void | string {
    return "Insurance is only applicable to fragile luggage";
  }

  public toString(): string {
    return `${this.description} (${this.constructor.name})`;
  }
}