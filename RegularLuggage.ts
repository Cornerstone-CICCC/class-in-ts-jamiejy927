import { Luggage } from "./Luggage.js";
import { Priority } from "./Priority.js";

export class RegularLuggage extends Luggage {
  getPrice(): number {
    if (this.weight <= 23) return 0;
    const extraWeight = this.weight - 23;
    
    if (this.priority === Priority.Normal) return this.fee * extraWeight;
    if (this.priority === Priority.Priority) return this.fee * 5 * extraWeight;
    return this.fee * 10 * extraWeight; // Urgent
  }

  getInsuranceValue(): number { return 0; }
}