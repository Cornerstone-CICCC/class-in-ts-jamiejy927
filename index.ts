import { Priority } from "./Priority.js";
import { FragileLuggage } from "./FragileLuggage.js";
import { RegularLuggage } from "./RegularLuggage.js";
import { CarryOnLuggage } from "./CarryOnLuggage.js";
import { ListOfLuggages } from "./ListOfLuggages.js";

// 1. Create instances of luggage
const fragileLuggage = new FragileLuggage(
  10,
  "Box with fragile items",
  Priority.Normal,
  100
);

const regularLuggage = new RegularLuggage(
  30,
  "Luggage full of clothes",
  Priority.Priority
);

const carryOnLuggage = new CarryOnLuggage(
  6,
  "Luggage with personal items",
  Priority.Urgent
);

// 2. Create the list and insert luggage
const list = new ListOfLuggages();
list.insertLuggage(fragileLuggage);
list.insertLuggage(regularLuggage);
list.insertLuggage(carryOnLuggage);

// 3. Print results
console.log("--- All Luggages ---");
list.printAllLuggages();

console.log("\n--- Prices ---");
list.priceOfEachLuggage();

console.log("\n--- Total Price ---");
console.log(list.totalPrice());

console.log("\n--- Fragile Info ---");
console.log(list.getFragileLuggageWithInsurance());

// Optional Challenges Test
list.sortByPrice();
list.printAllLuggages();

list.updateWeight("Luggage with personal items", 15);
console.log("Updated Price:", carryOnLuggage.getPrice());

list.removeLuggage("Luggage full of clothes");
list.printAllLuggages();