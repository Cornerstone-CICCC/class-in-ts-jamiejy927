import { Luggage } from "./Luggage.js";
import { FragileLuggage } from "./FragileLuggage.js";

export class ListOfLuggages {
  private luggages: Luggage[] = [];

  // Add luggage
  insertLuggage(luggage: Luggage): void {
    this.luggages.push(luggage);
  }

  // Optional: Remove luggage by description
  removeLuggage(description: string): void {
    this.luggages = this.luggages.filter(l => l.getDescription() !== description);
    console.log(`\n--- Luggage removed: ${description} ---`);
  }

  // Print all
  printAllLuggages(): void {
    this.luggages.forEach(l => console.log(l.toString()));
  }

  // Print individual prices
  priceOfEachLuggage(): void {
    this.luggages.forEach(l => {
      console.log(`${l.getDescription()}: $${l.getPrice().toFixed(2)}`);
    });
  }

  // Total price
  totalPrice(): number {
    return this.luggages.reduce((sum, l) => sum + l.getPrice(), 0);
  }

  // Fragile luggage stats
  getFragileLuggageWithInsurance(): { quantity: number; totalInsurance: number } {
    const fragiles = this.luggages.filter(l => l instanceof FragileLuggage) as FragileLuggage[];
    const totalInsurance = fragiles.reduce((sum, l) => sum + l.getInsuranceValue(), 0);
    return { quantity: fragiles.length, totalInsurance };
  }

  // Optional: Sort by Price (High to Low)
  sortByPrice(): void {
    this.luggages.sort((a, b) => b.getPrice() - a.getPrice());
    console.log("\n--- Sorted by Price (High to Low) ---");
  }

  // Optional: Sort by Weight (Low to High)
  sortByWeight(): void {
    this.luggages.sort((a, b) => a.getWeight() - b.getWeight());
    console.log("\n--- Sorted by Weight (Low to High) ---");
  }

  // Optional: Update weight of a specific luggage
  updateWeight(description: string, newWeight: number): void {
    const item = this.luggages.find(l => l.getDescription() === description);
    if (item) {
      item.setWeight(newWeight);
      console.log(`\n--- Updated weight of ${description} to ${newWeight}kg ---`);
    }
  }
}