import { Luggage } from "./Luggage.js";

export class CarryOnLuggage extends Luggage {
  getPrice(): number {
    if (this.weight <= 5) return 0;
    return this.fee * 3 * (this.weight - 5);
  }

  getInsuranceValue(): number { return 0; }
}