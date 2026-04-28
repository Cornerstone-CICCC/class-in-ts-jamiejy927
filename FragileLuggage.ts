import { Luggage } from "./Luggage.js";
import { Priority } from "./Priority.js";

export class FragileLuggage extends Luggage {
  constructor(
    weight: number,
    description: string,
    priority: Priority,
    private insurance: number
  ) {
    super(weight, description, priority);
  }

  getPrice(): number {
    if (this.priority === Priority.Normal) return this.insurance;
    if (this.priority === Priority.Priority) return this.fee * 5 + this.insurance;
    return this.fee * 10 + this.insurance; // Urgent
  }

  getInsuranceValue(): number { return this.insurance; }
  setInsuranceValue(value: number): void { this.insurance = value; }

  toString(): string {
    return `${super.toString()} - Insurance: ${this.insurance}`;
  }
}